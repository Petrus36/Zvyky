import React from 'react'

const LINKS = {
  instagram: 'https://www.instagram.com/autoskola.zvyky/',
  facebook: 'https://www.facebook.com/profile.php?id=100075200562092',
  website: 'https://www.zvyky.sk/',
} as const

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

function LinkCard({
  href,
  label,
  sub,
  icon,
  accent,
}: {
  href: string
  label: string
  sub: string
  icon: React.ReactNode
  accent: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-white rounded-2xl shadow-lg border border-gray-100/80 px-5 py-4 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
        style={{ backgroundColor: accent }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-500 truncate">{sub}</p>
      </div>
      <svg
        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 flex-shrink-0 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

const TreeSocial = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center font-inter px-4 py-10"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ backgroundColor: '#00AEEF' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15"
          style={{ backgroundColor: '#116584' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full opacity-[0.07]"
          style={{ backgroundColor: '#00AEEF' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/images/zvyky_autoskola_TRUE_TRANSPARENT.webp"
            alt="Zvyky Autoškola Logo"
            className="h-14 sm:h-16 md:h-20 mx-auto mb-5 drop-shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Autoškola Zvyky
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Sledujte nás online
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          <div className="h-2 w-full" style={{ backgroundColor: '#00AEEF' }} />
          <div className="p-6 md:p-8 space-y-4">
            <LinkCard
              href={LINKS.instagram}
              label="Instagram"
              sub="instagram.com/autoskola.zvyky"
              accent="#E4405F"
              icon={<IconInstagram className="w-6 h-6" />}
            />
            <LinkCard
              href={LINKS.facebook}
              label="Facebook"
              sub="Zvyky Autoškola"
              accent="#1877F2"
              icon={<IconFacebook className="w-6 h-6" />}
            />
            <LinkCard
              href={LINKS.website}
              label="Web"
              sub="zvyky.sk"
              accent="#116584"
              icon={<IconGlobe className="w-6 h-6" />}
            />
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2025 Zvyky s.r.o.
        </p>
      </div>
    </div>
  )
}

export default TreeSocial
