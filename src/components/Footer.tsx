import { Link, useLocation } from 'react-router-dom'

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

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs sm:text-sm">
          <p>&copy; 2025 Zvyky s.r.o. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


