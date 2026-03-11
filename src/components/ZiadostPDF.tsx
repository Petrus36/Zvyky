import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer'

// Register Roboto font (supports all Slovak characters)
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxP.ttf', fontWeight: 'normal' },
    { src: 'https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc9.ttf', fontWeight: 'bold' },
  ],
})

export interface ZiadostData {
  meno: string
  priezvisko: string
  rodnePriezvisko: string
  datumNarodenia: string
  miestoNarodenia: string
  rodneCislo: string
  ulica: string
  mesto: string
  psc: string
  drzitelSkupiny?: string
  drzitelPreukazu?: string
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

const s = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    fontSize: 9.5,
    paddingTop: 34,
    paddingBottom: 44,
    paddingHorizontal: 46,
    backgroundColor: '#fff',
    color: '#111',
  },
  // ── Police box ──
  policeBox: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'solid',
    padding: 8,
    marginBottom: 14,
    backgroundColor: '#f8f8f8',
  },
  policeNote: { fontSize: 7.5, color: '#555', fontStyle: 'italic', marginBottom: 5 },
  policeRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 6 },
  policeLbl: { fontSize: 8.5 },
  policeLine: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#000', borderBottomStyle: 'solid', height: 14 },
  // ── Title ──
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  titleBar: { height: 1.5, backgroundColor: '#333', marginHorizontal: 24, marginBottom: 14 },
  // ── Section label ──
  sectionLbl: {
    fontSize: 7.5,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
  },
  // ── Field ──
  fieldWrap: { marginBottom: 9 },
  fieldLbl: { fontSize: 7.5, color: '#555', marginBottom: 2 },
  fieldVal: {
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    paddingBottom: 2,
    minHeight: 15,
  },
  // ── Two-column row ──
  row2: { flexDirection: 'row', gap: 14, marginBottom: 9 },
  col: { flex: 1 },
  // ── Na základe ──
  naZakladeLbl: { fontSize: 8.5, marginBottom: 5 },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 4 },
  checkBox: {
    width: 11, height: 11,
    borderWidth: 1, borderColor: '#111', borderStyle: 'solid',
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  checkMark: { fontSize: 8, fontWeight: 'bold', lineHeight: 1 },
  checkLbl: { fontSize: 8.5 },
  // ── Signature row ──
  signRow: { flexDirection: 'row', gap: 14, marginTop: 18, alignItems: 'flex-end' },
  signSm: { flex: 1 },
  signSmLbl: { fontSize: 7.5, marginBottom: 2 },
  signSmLine: {
    borderBottomWidth: 1, borderBottomColor: '#000', borderBottomStyle: 'solid',
    paddingBottom: 2, fontSize: 10, minHeight: 15,
  },
  signBig: { flex: 2, alignItems: 'center' },
  signBigLine: {
    width: '100%',
    borderBottomWidth: 1, borderBottomColor: '#000', borderBottomStyle: 'solid',
    height: 22,
  },
  signBigLbl: { fontSize: 7.5, color: '#555', marginTop: 2 },
  footnote: { fontSize: 7, color: '#777', marginTop: 6 },
  // ── Guardian box ──
  guardianBox: {
    borderWidth: 1, borderColor: '#bbb', borderStyle: 'solid',
    padding: 12, marginTop: 18,
  },
  guardianNote: { fontSize: 7.5, color: '#555', fontStyle: 'italic', marginBottom: 10 },
  consentRow: { flexDirection: 'row', alignItems: 'flex-end', flexWrap: 'wrap', gap: 5, marginBottom: 10 },
  consentTxt: { fontSize: 8.5 },
  consentLine: {
    width: 56,
    borderBottomWidth: 1, borderBottomColor: '#000', borderBottomStyle: 'solid',
    fontSize: 10, minHeight: 14, paddingBottom: 2,
  },
})

// ── Helpers ──
const Field = ({ label, value }: { label: string; value: string }) => (
  <View style={s.fieldWrap}>
    <Text style={s.fieldLbl}>{label}</Text>
    <Text style={s.fieldVal}>{value}</Text>
  </View>
)

const InlineField = ({ label, value }: { label: string; value: string }) => (
  <View style={s.col}>
    <Text style={s.fieldLbl}>{label}</Text>
    <Text style={s.fieldVal}>{value}</Text>
  </View>
)

const SignatureRow = ({ city, date, signatoryLabel }: { city: string; date: string; signatoryLabel: string }) => (
  <View style={s.signRow}>
    <View style={s.signSm}>
      <Text style={s.signSmLbl}>V</Text>
      <Text style={s.signSmLine}>{city}</Text>
    </View>
    <View style={s.signSm}>
      <Text style={s.signSmLbl}>dňa</Text>
      <Text style={s.signSmLine}>{date}</Text>
    </View>
    <View style={s.signBig}>
      <View style={s.signBigLine} />
      <Text style={s.signBigLbl}>{signatoryLabel}</Text>
    </View>
  </View>
)

const zakladNaOptions = [
  { key: 'kurzSkuska',     label: 'vodičského kurzu a skúšky z odbornej spôsobilosti' },
  { key: 'osobitnaSkuska', label: 'osobitnej skúšky' },
  { key: 'osobitnyVycvik', label: 'osobitného výcviku' },
] as const

// ── Main PDF Document ──
export const ZiadostPDF = ({ data }: { data: ZiadostData }) => {
  const address = [data.ulica, data.mesto, data.psc].filter(Boolean).join(', ')

  return (
    <Document title="Žiadosť o udelenie vodičského oprávnenia">
      <Page size="A4" style={s.page}>

        {/* Police header */}
        <View style={s.policeBox}>
          <Text style={s.policeNote}>(Vyplňuje orgán Policajného zboru)</Text>
          <View style={s.policeRow}>
            <Text style={s.policeLbl}>Poradové číslo v protokole vodičských oprávnení:</Text>
            <View style={s.policeLine} />
          </View>
        </View>

        {/* Title */}
        <Text style={s.title}>ŽIADOSŤ O UDELENIE VODIČSKÉHO OPRÁVNENIA</Text>
        <View style={s.titleBar} />

        {/* Applicant section */}
        <Text style={s.sectionLbl}>(Vyplňuje žiadateľ)</Text>

        <View style={s.row2}>
          <InlineField label="Meno" value={data.meno} />
          <InlineField label="priezvisko" value={data.priezvisko} />
        </View>

        <Field label="rodné priezvisko" value={data.rodnePriezvisko} />

        <View style={s.row2}>
          <InlineField label="dátum narodenia" value={data.datumNarodenia} />
          <InlineField label="miesto narodenia" value={data.miestoNarodenia} />
        </View>

        <Field label="rodné číslo" value={data.rodneCislo} />
        <Field label="adresa pobytu alebo miesta zdržiavania sa" value={address} />
        <Field label="Som držiteľom vodičského oprávnenia skupiny" value={data.drzitelSkupiny || ''} />
        <Field label="Som držiteľom vodičského preukazu (uviesť číslo a štát vydania)" value={data.drzitelPreukazu || ''} />
        <Field label="Žiadam o udelenie vodičského oprávnenia skupiny" value={data.ziadamSkupiny} />

        {/* Na základe */}
        <View style={s.fieldWrap}>
          <Text style={s.naZakladeLbl}>na základe:*</Text>
          {zakladNaOptions.map(({ key, label }) => (
            <View key={key} style={s.checkRow}>
              <View style={s.checkBox}>
                {data.zakladNa === key && <Text style={s.checkMark}>X</Text>}
              </View>
              <Text style={s.checkLbl}>{label}</Text>
            </View>
          ))}
        </View>

        <SignatureRow city={data.podpisVMeste} date={data.podpisDna} signatoryLabel="podpis žiadateľa" />
        <Text style={s.footnote}>* Relevantné označte znakom „X".</Text>

        {/* Guardian section */}
        <View style={s.guardianBox}>
          <Text style={s.guardianNote}>
            (Vyplňuje zákonný zástupca žiadateľa, ak žiadateľ v deň podania žiadosti
            o udelenie vodičského oprávnenia nedosiahol vek 18 rokov)
          </Text>

          <View style={s.row2}>
            <InlineField label="Meno" value={data.isMinor ? (data.zakonnyZastupcaMeno ?? '') : ''} />
            <InlineField label="priezvisko" value={data.isMinor ? (data.zakonnyZastupcaPriezvisko ?? '') : ''} />
          </View>

          <Field label="rodné číslo **" value={data.isMinor ? (data.zakonnyZastupcaRodneCislo ?? '') : ''} />

          <View style={s.consentRow}>
            <Text style={s.consentTxt}>
              ako zákonný zástupca žiadateľa súhlasím s udelením vodičského oprávnenia skupiny
            </Text>
            <Text style={s.consentLine}>
              {data.isMinor ? (data.zakonnyZastupcaSkupina ?? '') : ''}
            </Text>
          </View>

          <SignatureRow
            city={data.isMinor ? data.podpisVMeste : ''}
            date={data.isMinor ? data.podpisDna : ''}
            signatoryLabel="podpis zákonného zástupcu"
          />
          <Text style={s.footnote}>** Ak rodné číslo nie je pridelené, uveďte dátum narodenia.</Text>
        </View>

      </Page>
    </Document>
  )
}

export default ZiadostPDF

