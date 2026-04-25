import { PDFPage, PDFFont, rgb } from 'pdf-lib'

/** Fields required to draw on the official žiadosť PDF (browser download). */
export interface ZiadostPdfFields {
  meno: string
  priezvisko: string
  rodnePriezvisko: string
  datumNarodenia: string
  miestoNarodenia: string
  rodneCislo: string
  ulica: string
  mesto: string
  psc: string
  drzitelSkupiny: string
  drzitelPreukazu: string
  ziadamSkupiny: string
  zakladNa: 'kurzSkuska' | 'osobitnaSkuska' | 'osobitnyVycvik'
  podpisVMeste: string
  podpisDna: string
  isMinor: boolean
  zakonnyZastupcaMeno?: string
  zakonnyZastupcaPriezvisko?: string
  zakonnyZastupcaRodneCislo?: string
  zakonnyZastupcaSkupina?: string
}

export function toSafeAscii(text: string): string {
  return text
    .replace(/[šŠ]/g, c => (c === 'š' ? 's' : 'S'))
    .replace(/[čČ]/g, c => (c === 'č' ? 'c' : 'C'))
    .replace(/[žŽ]/g, c => (c === 'ž' ? 'z' : 'Z'))
    .replace(/[ľĽ]/g, c => (c === 'ľ' ? 'l' : 'L'))
    .replace(/[ŕŔ]/g, c => (c === 'ŕ' ? 'r' : 'R'))
    .replace(/[ňŇ]/g, c => (c === 'ň' ? 'n' : 'N'))
    .replace(/[ťŤ]/g, c => (c === 'ť' ? 't' : 'T'))
    .replace(/[ďĎ]/g, c => (c === 'ď' ? 'd' : 'D'))
    .replace(/[ĺĹ]/g, c => (c === 'ĺ' ? 'l' : 'L'))
}

/**
 * Draw žiadosť field overlays on the first page. Caller loads PDF + embeds font.
 */
export function drawZiadostOnFirstPage(
  page: PDFPage,
  font: PDFFont,
  reg: ZiadostPdfFields,
  hasUnicodeFont: boolean,
): void {
  const { height } = page.getSize()
  const safe = (s: string) => (hasUnicodeFont ? s || '' : toSafeAscii(s || ''))
  const draw = (text: string, x: number, yTop: number, size = 9.5) => {
    const str = safe(text)
    if (!str.trim()) return
    const y = height - yTop
    page.drawText(str, { x, y, font, size, color: rgb(0, 0, 0) })
  }

  draw(reg.meno, 125, 223)
  draw(reg.priezvisko, 388, 223)
  draw(reg.rodnePriezvisko, 152, 240)
  draw(reg.datumNarodenia, 152, 258)
  draw(reg.miestoNarodenia, 390, 258)
  draw(reg.rodneCislo, 128, 278)
  draw(`${reg.ulica}, ${reg.mesto} ${reg.psc}`, 276, 293)
  draw(reg.drzitelSkupiny || '', 292, 312)
  draw(reg.drzitelPreukazu || '', 390, 330)
  draw(reg.ziadamSkupiny, 310, 362)

  const CB: Record<string, number> = {
    kurzSkuska: 60,
    osobitnaSkuska: 305,
    osobitnyVycvik: 408,
  }
  draw('X', CB[reg.zakladNa] ?? CB.kurzSkuska, 411, 8.5)

  draw(reg.podpisVMeste, 100, 486)
  draw(reg.podpisDna, 244, 486)

  if (reg.isMinor) {
    draw(reg.zakonnyZastupcaMeno || '', 105, 579)
    draw(reg.zakonnyZastupcaPriezvisko || '', 358, 579)
    draw(reg.zakonnyZastupcaRodneCislo || '', 128, 605)
    draw(reg.zakonnyZastupcaSkupina || '', 422, 620)
    draw(reg.podpisVMeste, 76, 666)
    draw(reg.podpisDna, 230, 666)
  }
}

