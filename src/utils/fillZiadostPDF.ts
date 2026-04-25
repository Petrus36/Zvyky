import { PDFDocument, StandardFonts } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import { Registration } from '../context/CourseDataContext'
import arialUrl from '../assets/arial.ttf?url'
import { drawZiadostOnFirstPage, type ZiadostPdfFields } from './ziadostPdfCore'

function regToFields(reg: Registration): ZiadostPdfFields {
  return {
    meno: reg.meno,
    priezvisko: reg.priezvisko,
    rodnePriezvisko: reg.rodnePriezvisko,
    datumNarodenia: reg.datumNarodenia,
    miestoNarodenia: reg.miestoNarodenia,
    rodneCislo: reg.rodneCislo,
    ulica: reg.ulica,
    mesto: reg.mesto,
    psc: reg.psc,
    drzitelSkupiny: reg.drzitelSkupiny,
    drzitelPreukazu: reg.drzitelPreukazu,
    ziadamSkupiny: reg.ziadamSkupiny,
    zakladNa: reg.zakladNa,
    podpisVMeste: reg.podpisVMeste,
    podpisDna: reg.podpisDna,
    isMinor: reg.isMinor,
    zakonnyZastupcaMeno: reg.zakonnyZastupcaMeno,
    zakonnyZastupcaPriezvisko: reg.zakonnyZastupcaPriezvisko,
    zakonnyZastupcaRodneCislo: reg.zakonnyZastupcaRodneCislo,
    zakonnyZastupcaSkupina: reg.zakonnyZastupcaSkupina,
  }
}

export async function fillZiadostPDF(reg: Registration): Promise<Blob> {
  const formRes = await fetch('/images/zvyky_tlaciva.pdf')
  if (!formRes.ok) throw new Error(`Cannot load PDF form: ${formRes.status}`)
  const formBytes = await formRes.arrayBuffer()
  const pdfDoc = await PDFDocument.load(formBytes)

  // Keep a 2-page document: page 1 = filled overlay; page 2 = from template (empty of our text).
  const n = pdfDoc.getPageCount()
  if (n > 2) {
    for (let i = n - 1; i >= 2; i--) pdfDoc.removePage(i)
  } else if (n === 1) {
    const p0 = pdfDoc.getPage(0)
    const { width, height } = p0.getSize()
    pdfDoc.addPage([width, height])
  }

  pdfDoc.registerFontkit(fontkit)

  let font: Awaited<ReturnType<typeof pdfDoc.embedFont>>
  let hasUnicodeFont = false

  try {
    const fontRes = await fetch(arialUrl)
    const fontBuf = await fontRes.arrayBuffer()
    font = await pdfDoc.embedFont(fontBuf)
    hasUnicodeFont = true
  } catch (err) {
    console.warn('Custom font failed, falling back to Helvetica:', err)
    font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  }

  const page = pdfDoc.getPages()[0]
  drawZiadostOnFirstPage(page, font, regToFields(reg), hasUnicodeFont)

  const pdfBytes = await pdfDoc.save()
  return new Blob([pdfBytes] as BlobPart[], { type: 'application/pdf' })
}
