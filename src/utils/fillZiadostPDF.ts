import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import { Registration } from '../context/CourseDataContext'
import arialUrl from '../assets/arial.ttf?url'

// Replace Slovak chars not in WinAnsi (fallback when custom font can't load)
function toSafe(text: string): string {
  return text
    .replace(/[šŠ]/g, c => c === 'š' ? 's' : 'S')
    .replace(/[čČ]/g, c => c === 'č' ? 'c' : 'C')
    .replace(/[žŽ]/g, c => c === 'ž' ? 'z' : 'Z')
    .replace(/[ľĽ]/g, c => c === 'ľ' ? 'l' : 'L')
    .replace(/[ŕŔ]/g, c => c === 'ŕ' ? 'r' : 'R')
    .replace(/[ňŇ]/g, c => c === 'ň' ? 'n' : 'N')
    .replace(/[ťŤ]/g, c => c === 'ť' ? 't' : 'T')
    .replace(/[ďĎ]/g, c => c === 'ď' ? 'd' : 'D')
    .replace(/[ĺĹ]/g, c => c === 'ĺ' ? 'l' : 'L')
}

export async function fillZiadostPDF(reg: Registration): Promise<Blob> {
  // ── 1. Load original government form ──────────────────────────────────────
  const formRes = await fetch('/images/zvyky_tlaciva.pdf')
  if (!formRes.ok) throw new Error(`Cannot load PDF form: ${formRes.status}`)
  const formBytes = await formRes.arrayBuffer()
  const pdfDoc = await PDFDocument.load(formBytes)

  // ── 1.5. Remove all pages except the first one ─────────────────────────────
  const pageCount = pdfDoc.getPageCount()
  // Remove pages from the end to avoid index shifting
  for (let i = pageCount - 1; i > 0; i--) {
    pdfDoc.removePage(i)
  }

  // ── 2. Embed local Unicode font (supports full Slovak diacritics) ──────────
  // registerFontkit must be called before ANY embedFont call
  pdfDoc.registerFontkit(fontkit)

  let font: Awaited<ReturnType<typeof pdfDoc.embedFont>>
  let hasUnicodeFont = false

  try {
    // arialUrl is resolved by Vite at build time — Arial has full Slovak support
    const fontRes = await fetch(arialUrl)
    const fontBytes = await fontRes.arrayBuffer()
    font = await pdfDoc.embedFont(fontBytes)
    hasUnicodeFont = true
  } catch (err) {
    console.warn('Custom font failed, falling back to Helvetica:', err)
    font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  }

  const page   = pdfDoc.getPages()[0]
  const { height } = page.getSize() // A4 = 842 pt

  // ── helpers ────────────────────────────────────────────────────────────────
  const safe = (s: string) => hasUnicodeFont ? (s || '') : toSafe(s || '')

  /**
   * Draw text over the form — no background fill, text overlays transparently.
   * yTop = distance from TOP of page in points.
   */
  const draw = (text: string, x: number, yTop: number, size = 9.5) => {
    const str = safe(text)
    if (!str.trim()) return
    const y = height - yTop
    page.drawText(str, { x, y, font, size, color: rgb(0, 0, 0) })
  }

  // ── 3. Fill applicant fields ───────────────────────────────────────────────
  // NOTE: All yTop values = distance from TOP of page in points.
  // The police/title box takes ~215pt, fields start at yTop ≈ 231.
  // Line spacing ≈ 21pt.

  // Row: "Meno ... priezvisko ..."
  draw(reg.meno,         125,  223)
  draw(reg.priezvisko,   388,  223)

  // Row: "rodné priezvisko ..."
  draw(reg.rodnePriezvisko, 152, 240)

  // Row: "dátum narodenia ... miesto narodenia ..."
  draw(reg.datumNarodenia,  152, 258)
  draw(reg.miestoNarodenia, 390, 258)

  // Row: "rodné číslo ..."
  draw(reg.rodneCislo, 128, 278)

  // Row: "adresa pobytu alebo miesta zdržiavania sa ..."
  draw(`${reg.ulica}, ${reg.mesto} ${reg.psc}`, 276, 293)

  // Row: "Som držiteľom vodičského oprávnenia skupiny ..."
  draw(reg.drzitelSkupiny || '', 292, 312)

  // Row: "Som držiteľom vodičského preukazu (uviesť číslo a štát vydania) ..."
  draw(reg.drzitelPreukazu || '', 390, 330)

  // Row: "Žiadam o udelenie vodičského oprávnenia skupiny ..."
  draw(reg.ziadamSkupiny, 310, 362)

  // ── 4. Checkbox X marks ────────────────────────────────────────────────────
  // "☐ vodičského kurzu... ☐ osobitnej skúšky ☐ osobitného výcviku" — ONE line
  const CB: Record<string, number> = {
    kurzSkuska:     60,   // ☐ first option
    osobitnaSkuska: 305,  // ☐ second option
    osobitnyVycvik: 408,  // ☐ third option
  }
  draw('X', CB[reg.zakladNa], 411, 8.5)

  // ── 5. Signing line ────────────────────────────────────────────────────────
  // "V ... dňa ... podpis žiadateľa"
  draw(reg.podpisVMeste, 100,  486)
  draw(reg.podpisDna,   244, 486)

  // ── 6. Guardian section (only if minor) ───────────────────────────────────
  if (reg.isMinor) {
    // Row: "Meno ... priezvisko ..."
    draw(reg.zakonnyZastupcaMeno        || '', 105,  579)
    draw(reg.zakonnyZastupcaPriezvisko  || '', 358, 579)

    // Row: "rodné číslo ** ..."
    draw(reg.zakonnyZastupcaRodneCislo  || '', 128, 605)

    // Row: "... súhlasím s udelením vodičského oprávnenia skupiny ..."
    draw(reg.zakonnyZastupcaSkupina     || '', 422, 620)

    // Row: "V ... dňa ..."
    draw(reg.podpisVMeste, 76,  666)
    draw(reg.podpisDna,   230, 666)
  }

  // ── 7. Save & return ──────────────────────────────────────────────────────
  const pdfBytes = await pdfDoc.save()
  return new Blob([pdfBytes] as BlobPart[], { type: 'application/pdf' })
}

