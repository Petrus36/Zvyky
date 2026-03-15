import React from 'react'
import AdminLayout from './components/AdminLayout'
import { useCourseData, Prices } from '../../context/CourseDataContext'

interface PriceField {
  key: keyof Prices
  label: string
  sublabel: string
  color: string
  badgeColor: string
}

const MALACKY_FIELDS: PriceField[] = [
  { key: 'malacky_B_standard', label: 'Kurz B',  sublabel: 'Štandardná cena',   color: '#00AEEF', badgeColor: '#00AEEF' },
  { key: 'malacky_B_friend',   label: 'Kurz B',  sublabel: 'Priveď priateľa',   color: '#0284c7', badgeColor: '#0284c7' },
  { key: 'malacky_B_student',  label: 'Kurz B',  sublabel: 'Zľava pre študentov', color: '#16a34a', badgeColor: '#16a34a' },
  { key: 'malacky_A1',         label: 'Kurz A1', sublabel: 'Štandardná cena',   color: '#116584', badgeColor: '#116584' },
  { key: 'malacky_A2',         label: 'Kurz A2', sublabel: 'Štandardná cena',   color: '#0369a1', badgeColor: '#0369a1' },
  { key: 'malacky_kondicne',   label: 'Kondičné jazdy', sublabel: 'Cena / 60 min', color: '#7c3aed', badgeColor: '#7c3aed' },
  { key: 'malacky_osobitny',   label: 'Osobitný výcvik', sublabel: 'Štandardná cena', color: '#dc2626', badgeColor: '#dc2626' },
]

const BRATISLAVA_FIELDS: PriceField[] = [
  { key: 'bratislava_B_standard', label: 'Kurz B', sublabel: 'Pôvodná cena (preškrtnutá)', color: '#6b7280', badgeColor: '#6b7280' },
  { key: 'bratislava_B_welcome',  label: 'Kurz B', sublabel: '⚡ Uvítacia cena',           color: '#ea580c', badgeColor: '#ea580c' },
  { key: 'bratislava_kondicne',   label: 'Kondičné jazdy', sublabel: 'Cena / 60 min',     color: '#7c3aed', badgeColor: '#7c3aed' },
  { key: 'bratislava_osobitny',   label: 'Osobitný výcvik', sublabel: 'Štandardná cena',  color: '#dc2626', badgeColor: '#dc2626' },
]

const PriceCard = ({
  field, value, onSave,
}: {
  field: PriceField
  value: number
  onSave: (key: keyof Prices, val: number) => void
}) => {
  const [editing, setEditing] = React.useState(false)
  const [inputVal, setInputVal] = React.useState(String(value))
  const [justSaved, setJustSaved] = React.useState(false)

  const handleSave = () => {
    const n = parseInt(inputVal)
    if (isNaN(n) || n <= 0) return
    onSave(field.key, n)
    setEditing(false)
    setJustSaved(true)
    setTimeout(() => setJustSaved(false), 2000)
  }

  return (
    <div className={`bg-white rounded-2xl border-2 shadow-sm p-5 transition-all duration-200 ${
      editing ? 'border-sky-400 shadow-lg' : justSaved ? 'border-green-400' : 'border-gray-100 hover:border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow"
            style={{ backgroundColor: field.badgeColor }}>
            {field.label.replace('Kurz ', '').replace('Kondičné jazdy', 'KJ').replace('Osobitný výcvik', 'OV')}
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm leading-tight">{field.label}</p>
            <p className="text-xs text-gray-400">{field.sublabel}</p>
          </div>
        </div>
        {justSaved && (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Uložené
          </span>
        )}
      </div>

      {editing ? (
        <div className="space-y-2">
          <div className="relative">
            <input
              type="number"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') setEditing(false) }}
              autoFocus
              className="w-full pl-4 pr-10 py-2.5 border-2 border-sky-400 rounded-xl text-2xl font-extrabold text-gray-900 focus:outline-none bg-sky-50"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</span>
          </div>
          <div className="flex gap-2">
            <button onClick={handleSave}
              className="flex-1 py-2 rounded-xl text-white font-semibold text-xs transition-all hover:opacity-90"
              style={{ backgroundColor: '#00AEEF' }}>
              Uložiť
            </button>
            <button onClick={() => { setEditing(false); setInputVal(String(value)) }}
              className="flex-1 py-2 rounded-xl border border-gray-200 text-gray-600 font-semibold text-xs hover:bg-gray-50">
              Zrušiť
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-end justify-between">
          <p className="text-3xl font-extrabold text-gray-900">
            {value}<span className="text-xl ml-1 text-gray-400">€</span>
          </p>
          <button
            onClick={() => { setEditing(true); setInputVal(String(value)) }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border-2 transition-all hover:text-white hover:shadow"
            style={{ borderColor: field.color, color: field.color }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = field.color; (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = field.color }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Upraviť
          </button>
        </div>
      )}
    </div>
  )
}

const AdminPrices = () => {
  const { prices, setPrices } = useCourseData()
  const [saveError, setSaveError] = React.useState('')

  const handleSave = async (key: keyof Prices, val: number) => {
    setSaveError('')
    try {
      await setPrices({ ...prices, [key]: val })
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Chyba pri ukladaní ceny.')
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8 font-inter">

        {/* Header */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">Ceny kurzov</h2>
          <p className="text-sm text-gray-500 mt-0.5">Zmeny sa okamžite prejavia na webe</p>
        </div>

        {/* Error banner */}
        {saveError && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700 text-sm font-medium">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Chyba pri ukladaní: {saveError}
          </div>
        )}

        {/* Info banner */}
        <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl p-4">
          <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-sky-700">
            Kliknite na <strong>Upraviť</strong> na ľubovolnej karte, zadajte novú cenu a potvrďte. Cena sa okamžite aktualizuje na všetkých stránkach webu.
          </p>
        </div>

        {/* Malacky */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#116584' }}>M</div>
            <h3 className="text-lg font-bold text-gray-800">Malacky</h3>
            <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{MALACKY_FIELDS.length} cien</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {MALACKY_FIELDS.map(f => (
              <PriceCard key={f.key} field={f} value={prices[f.key]} onSave={handleSave} />
            ))}
          </div>
        </div>

        {/* Bratislava */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#00AEEF' }}>B</div>
            <h3 className="text-lg font-bold text-gray-800">Bratislava</h3>
            <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{BRATISLAVA_FIELDS.length} ceny</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {BRATISLAVA_FIELDS.map(f => (
              <PriceCard key={f.key} field={f} value={prices[f.key]} onSave={handleSave} />
            ))}
          </div>
        </div>

        {/* Summary table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Prehľad všetkých cien</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Kurz</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Typ ceny</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pobočka</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Cena</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[...MALACKY_FIELDS.map(f => ({ ...f, loc: 'Malacky' })), ...BRATISLAVA_FIELDS.map(f => ({ ...f, loc: 'Bratislava' }))].map(f => (
                  <tr key={f.key} className="hover:bg-gray-50">
                    <td className="px-6 py-3">
                      <span className="text-xs font-bold text-white px-2.5 py-1 rounded-lg" style={{ backgroundColor: f.badgeColor }}>
                        {f.label.replace('Kurz ', '')}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{f.sublabel}</td>
                    <td className="px-4 py-3 text-gray-600">{f.loc}</td>
                    <td className="px-6 py-3 text-right font-extrabold text-gray-900">{prices[f.key]} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminPrices
