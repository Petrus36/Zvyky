import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AdminLayout from './components/AdminLayout'
import { useCourseData } from '../../context/CourseDataContext'

const statusConfig: Record<string, { label: string; bg: string; text: string }> = {
  pending: { label: 'Čakajúce', bg: 'bg-amber-100', text: 'text-amber-700' },
  approved: { label: 'Schválené', bg: 'bg-green-100', text: 'text-green-700' },
  rejected: { label: 'Zamietnuté', bg: 'bg-red-100', text: 'text-red-700' },
}

const quickLinks = [
  { to: '/admin/registracie', label: 'Zobraziť všetky registrácie', icon: '👥' },
  { to: '/admin/ceny', label: 'Aktualizovať ceny kurzov', icon: '💰' },
  { to: '/admin/terminy', label: 'Spravovať termíny', icon: '📅' },
]

const AdminDashboard = () => {
  const { registrations, dates, refetchRegistrations } = useCourseData()

  // Load registrations from database on mount
  useEffect(() => { refetchRegistrations() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Calculate stats from real data
  const totalRegistrations = registrations.length
  const pendingCount = registrations.filter(r => r.status === 'pending').length
  const approvedCount = registrations.filter(r => r.status === 'approved').length
  const activeDates = dates.filter(d => d.isActive).length

  // Get registrations by location
  const malackyCount = registrations.filter(r => r.location === 'Malacky').length
  const bratislavaCount = registrations.filter(r => r.location === 'Bratislava').length
  const totalByLocation = malackyCount + bratislavaCount
  const malackyPercent = totalByLocation > 0 ? Math.round((malackyCount / totalByLocation) * 100) : 0
  const bratislavaPercent = totalByLocation > 0 ? Math.round((bratislavaCount / totalByLocation) * 100) : 0

  // Get recent registrations (last 5, sorted by date)
  const recentRegistrations = [...registrations]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)
    .map(reg => ({
      id: reg.id,
      name: `${reg.meno} ${reg.priezvisko}`,
      course: reg.courseType,
      location: reg.location,
      date: reg.createdAt,
      status: reg.status,
    }))

  // Calculate week change (registrations from last 7 days)
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const weekRegistrations = registrations.filter(r => new Date(r.createdAt) >= oneWeekAgo).length
  const weekChange = weekRegistrations > 0 ? `+${weekRegistrations} tento týždeň` : 'Žiadne tento týždeň'

  // Calculate month change (approved registrations from last 30 days)
  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
  const monthApproved = registrations.filter(r => 
    r.status === 'approved' && new Date(r.createdAt) >= oneMonthAgo
  ).length
  const monthChange = monthApproved > 0 ? `+${monthApproved} tento mesiac` : 'Žiadne tento mesiac'

  const stats = [
    {
      label: 'Celkom registrácií',
      value: totalRegistrations.toString(),
      change: weekChange,
      positive: weekRegistrations > 0,
      color: '#00AEEF',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'Čakajúce na spracovanie',
      value: pendingCount.toString(),
      change: pendingCount > 0 ? 'Vyžaduje pozornosť' : 'Všetko spracované',
      positive: pendingCount === 0,
      color: '#f59e0b',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Schválené registrácie',
      value: approvedCount.toString(),
      change: monthChange,
      positive: monthApproved > 0,
      color: '#10b981',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Aktívne termíny',
      value: activeDates.toString(),
      change: dates.filter(d => d.isActive).map(d => d.location).filter((v, i, a) => a.indexOf(v) === i).join(' + ') || 'Žiadne',
      positive: activeDates > 0,
      color: '#116584',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]
  return (
    <AdminLayout>
      <div className="space-y-8 font-inter">

        {/* Welcome banner */}
        <div className="rounded-2xl p-6 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #00AEEF 0%, #116584 100%)' }}>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Vitajte späť! 👋</h2>
            <p className="text-white/80 text-sm">Tu je prehľad vašich aktuálnych aktivít.</p>
          </div>
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -right-4 -bottom-10 w-28 h-28 rounded-full bg-white/10" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: stat.color }}>
                  {stat.icon}
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent registrations */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Posledné registrácie</h3>
              <Link to="/admin/registracie"
                className="text-sm font-medium hover:underline"
                style={{ color: '#00AEEF' }}>
                Zobraziť všetky →
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {recentRegistrations.length > 0 ? (
                recentRegistrations.map((reg) => {
                  const st = statusConfig[reg.status]
                  return (
                    <div key={reg.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: '#116584' }}>
                          {reg.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{reg.name}</p>
                          <p className="text-xs text-gray-400">Kurz {reg.course} · {reg.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 hidden sm:block">{reg.date}</span>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${st.bg} ${st.text}`}>
                          {st.label}
                        </span>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="px-6 py-8 text-center text-gray-400">
                  <p className="text-sm">Zatiaľ žiadne registrácie</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-5">Rýchle akcie</h3>
            <div className="space-y-3">
              {quickLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-sky-200 hover:bg-sky-50 transition-all group"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-sky-700">{link.label}</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-sky-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Location split */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-4">Registrácie podľa miesta</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Malacky</span><span>{malackyCount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${malackyPercent}%`, backgroundColor: '#00AEEF' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Bratislava</span><span>{bratislavaCount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${bratislavaPercent}%`, backgroundColor: '#116584' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard

