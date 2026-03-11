import React from 'react'
import AdminLayout from './components/AdminLayout'
import { useCourseData, CourseDate } from '../../context/CourseDataContext'

const courseColors: Record<string, { bg: string; text: string }> = {
  B:  { bg: '#00AEEF', text: '#fff' },
  A1: { bg: '#116584', text: '#fff' },
  A2: { bg: '#0284c7', text: '#fff' },
}

const emptyForm: Omit<CourseDate, 'id'> = {
  location:    'Malacky',
  courseType:  'B',
  startDate:   '',
  description: '',
  isActive:    true,
}

const AdminDates = () => {
  const { dates, addDate, updateDate, deleteDate } = useCourseData()
  const [showForm,       setShowForm]       = React.useState(false)
  const [editingId,      setEditingId]      = React.useState<string | null>(null)
  const [form,           setForm]           = React.useState<Omit<CourseDate, 'id'>>(emptyForm)
  const [deleteConfirm,  setDeleteConfirm]  = React.useState<string | null>(null)
  const [submitting,     setSubmitting]     = React.useState(false)

  const openAdd = () => {
    setEditingId(null)
    setForm(emptyForm)
    setShowForm(true)
  }

  const openEdit = (d: CourseDate) => {
    setEditingId(d.id)
    setForm({ location: d.location, courseType: d.courseType, startDate: d.startDate, description: d.description, isActive: d.isActive })
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      if (editingId) {
        await updateDate(editingId, form)
      } else {
        await addDate(form)
      }
      setShowForm(false)
    } finally {
      setSubmitting(false)
    }
  }

  const toggleActive = async (id: string) => {
    const date = dates.find(d => d.id === id)
    if (!date) return
    await updateDate(id, { isActive: !date.isActive })
  }

  const handleDeleteDate = async (id: string) => {
    await deleteDate(id)
    setDeleteConfirm(null)
  }

  const activeDates   = dates.filter(d => d.isActive)
  const inactiveDates = dates.filter(d => !d.isActive)

  const renderRow = (d: CourseDate) => {
    const col = courseColors[d.courseType] ?? { bg: '#00AEEF', text: '#fff' }
    return (
      <tr key={d.id} className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4">
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ backgroundColor: col.bg, color: col.text }}>
            {d.courseType}
          </span>
        </td>
        <td className="px-4 py-4 text-sm text-gray-700 font-medium hidden sm:table-cell">{d.location}</td>
        <td className="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">
          {new Date(d.startDate).toLocaleDateString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' })}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 hidden lg:table-cell">{d.description || '—'}</td>
        <td className="px-4 py-4">
          <button
            onClick={() => toggleActive(d.id)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
              d.isActive ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
              d.isActive ? 'translate-x-4' : 'translate-x-1'
            }`} />
          </button>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center justify-end gap-2">
            <button onClick={() => openEdit(d)}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button onClick={() => setDeleteConfirm(d.id)}
              className="p-2 rounded-lg border border-red-100 hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6 font-inter">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Termíny kurzov</h2>
            <p className="text-sm text-gray-500 mt-0.5">Pridávajte a spravujte začiatky kurzov</p>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 shadow-md self-start sm:self-auto"
            style={{ backgroundColor: '#00AEEF' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Pridať termín
          </button>
        </div>

        {/* Active dates */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <h3 className="font-bold text-gray-800">Aktívne termíny</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{activeDates.length}</span>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Kurz</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Miesto</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Dátum začiatku</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Popis</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Aktívny</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Akcie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {activeDates.length === 0 ? (
                    <tr><td colSpan={6} className="text-center py-10 text-gray-400 text-sm">Žiadne aktívne termíny</td></tr>
                  ) : activeDates.map(renderRow)}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Inactive dates */}
        {inactiveDates.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <h3 className="font-bold text-gray-500">Neaktívne termíny</h3>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-semibold">{inactiveDates.length}</span>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden opacity-70">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Kurz</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide hidden sm:table-cell">Miesto</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide hidden md:table-cell">Dátum začiatku</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide hidden lg:table-cell">Popis</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Aktívny</th>
                      <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Akcie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {inactiveDates.map(renderRow)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add / Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">{editingId ? 'Upraviť termín' : 'Pridať nový termín'}</h3>
              <button onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Pobočka</label>
                  <select
                    value={form.location}
                    onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2"
                  >
                    <option value="Malacky">Malacky</option>
                    <option value="Bratislava">Bratislava</option>
                  </select>
                </div>

                {/* Course type */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Typ kurzu</label>
                  <select
                    value={form.courseType}
                    onChange={e => setForm(f => ({ ...f, courseType: e.target.value }))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2"
                  >
                    <option value="B">B</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                  </select>
                </div>
              </div>

              {/* Start date */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Dátum začiatku</label>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                  required
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 bg-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Popis (voliteľné)</label>
                <input
                  type="text"
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  placeholder="napr. Jarný kurz B – Malacky"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 bg-gray-50"
                />
              </div>

              {/* Active toggle */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Aktívny termín</p>
                  <p className="text-xs text-gray-400">Zobrazí sa záujemcom na webe</p>
                </div>
                <button
                  type="button"
                  onClick={() => setForm(f => ({ ...f, isActive: !f.isActive }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    form.isActive ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
                    form.isActive ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 shadow-md disabled:opacity-60"
                  style={{ backgroundColor: '#00AEEF' }}
                >
                  {submitting ? 'Ukladám…' : (editingId ? 'Uložiť zmeny' : 'Pridať termín')}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Zrušiť
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setDeleteConfirm(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6"
            onClick={e => e.stopPropagation()}>
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-center font-bold text-gray-900 mb-2">Zmazať termín?</h3>
            <p className="text-center text-sm text-gray-500 mb-6">Táto akcia sa nedá vrátiť späť.</p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDeleteDate(deleteConfirm)}
                className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors"
              >
                Zmazať
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Zrušiť
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}

export default AdminDates
