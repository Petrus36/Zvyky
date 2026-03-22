import { Link, useLocation } from 'react-router-dom'

const SOCIAL_LINKS = {
  malacky: {
    facebook: 'https://www.facebook.com/profile.php?id=100075200562092',
    instagram: 'https://www.instagram.com/autoskola.zvyky/',
  },
  bratislava: {
    facebook: 'https://www.facebook.com/profile.php?id=100075200562092',
    instagram: 'https://www.instagram.com/autoskola.zvyky/',
  },
} as const

function SocialIconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function SocialIconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const Footer = () => {
  const location = useLocation()
  const isBratislava = location.pathname.startsWith('/bratislava')

  return (
    <footer className="text-white mt-auto font-inter" style={{ backgroundColor: '#116584' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex items-start">
            <img 
              src="/images/logo_footer.JPG" 
              alt="Zvyky Logo" 
              className="h-16 md:h-20 lg:h-24"
            />
          </div>

          {/* Rýchle odkazy */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Rýchle odkazy:</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to={isBratislava ? "/bratislava" : "/malacky"} className="hover:text-white/80 transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link to={isBratislava ? "/bratislava/kurzy" : "/malacky/kurzy"} className="hover:text-white/80 transition-colors">
                  Kurzy
                </Link>
              </li>
              <li>
                <Link to={isBratislava ? "/bratislava/dokumenty" : "/malacky/dokumenty"} className="hover:text-white/80 transition-colors">
                  Dokumenty
                </Link>
              </li>
              <li>
                <Link to={isBratislava ? "/bratislava/vozidla" : "/malacky/vozidla"} className="hover:text-white/80 transition-colors">
                  Vozidlá
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktné údaje */}
          <div className="ml-0 md:-ml-12">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Kontaktné údaje:</h3>
            <div className="space-y-2 text-sm md:text-base">
              {isBratislava ? (
                <>
                  <p>
                    <span className="font-semibold">mail:</span>{' '}
                    <a href="mailto:zvykyba@gmail.com" className="hover:text-white/80 transition-colors">
                      zvykyba@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Tel:</span>{' '}
                    <a href="tel:+421905556677" className="hover:text-white/80 transition-colors">
                      0905 55 66 77
                    </a>
                  </p>
                  <p className="mt-4">
                    <span className="font-semibold">Adresa:</span> Záhradnícka 4882/46, 821 08 Bratislava
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className="font-semibold">mail:</span>{' '}
                    <a href="mailto:zvykyautoskola@gmail.com" className="hover:text-white/80 transition-colors">
                      zvykyautoskola@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Kontakty:</span>{' '}
                  </p>
                  <p>
                    <span className="font-semibold">Zdeno:</span>{' '}
                    <a href="tel:+421905748441" className="hover:text-white/80 transition-colors">
                      0905 748 441
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Miška:</span>{' '}
                    <a href="tel:+421918472651" className="hover:text-white/80 transition-colors">
                      0918 472 651
                    </a>
                  </p>
                  <p className="mt-4">
                    <span className="font-semibold">Adresa:</span> Záhorácka 52/24, 901 01 Malacky
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col items-center gap-3">
          <span className="text-sm md:text-base font-semibold">Sledujte nás</span>
          <div className="flex items-center gap-5">
            <a
              href={isBratislava ? SOCIAL_LINKS.bratislava.facebook : SOCIAL_LINKS.malacky.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-white/80 transition-colors p-1"
            >
              <SocialIconFacebook className="w-7 h-7 md:w-8 md:h-8" />
            </a>
            <a
              href={isBratislava ? SOCIAL_LINKS.bratislava.instagram : SOCIAL_LINKS.malacky.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-white/80 transition-colors p-1"
            >
              <SocialIconInstagram className="w-7 h-7 md:w-8 md:h-8" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-center text-xs sm:text-sm">
          <p>&copy; 2025 Zvyky s.r.o. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


