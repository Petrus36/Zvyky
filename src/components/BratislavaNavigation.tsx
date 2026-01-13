import { Link } from 'react-router-dom'
import React from 'react'

const BratislavaNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50">
      <div 
        className="relative overflow-hidden"
      >
        {/* See-through background */}
        <div className="absolute inset-0 bg-white bg-opacity-25 backdrop-blur-sm"></div>
      
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-2 sm:-ml-6 md:ml-0 lg:ml-4 xl:-ml-12">
            <img 
              src="/images/zvyky_autoskola_TRUE_TRANSPARENT.webp" 
              alt="Zvyky Autoškola Logo" 
              className="h-6 sm:h-7 md:h-8 lg:h-10"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black z-30"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-1 md:justify-center lg:justify-end xl:justify-end pr-4 lg:mr-32 xl:pr-16">
            <Link 
              to="/bratislava" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert text-sm lg:text-base"
            >
              Domov
            </Link>
            <Link 
              to="/bratislava/kurzy" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert text-sm lg:text-base"
            >
              Kurzy
            </Link>
            <Link 
              to="/bratislava/dokumenty" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert text-sm lg:text-base"
            >
              Dokumenty
            </Link>
            <Link 
              to="/bratislava/vozidla" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert text-sm lg:text-base"
            >
              Vozidlá
            </Link>
          </div>
        </div>
        </div>
      </div>
        
      {/* Contact Button - Desktop */}
      <Link
        to="/bratislava/kontakt"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-4 lg:px-6 py-2 rounded-lg transition-all font-albert mr-4 md:mr-8 lg:mr-12 z-[60] text-sm lg:text-base"
      >
        KONTAKT
      </Link>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-[100]">
          <div className="flex flex-col py-4">
            <Link 
              to="/bratislava" 
              className="px-6 py-3 text-black uppercase font-semibold hover:bg-zvyky-blue hover:text-white transition-colors font-albert"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Domov
            </Link>
            <Link 
              to="/bratislava/kurzy" 
              className="px-6 py-3 text-black uppercase font-semibold hover:bg-zvyky-blue hover:text-white transition-colors font-albert"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kurzy
            </Link>
            <Link 
              to="/bratislava/dokumenty" 
              className="px-6 py-3 text-black uppercase font-semibold hover:bg-zvyky-blue hover:text-white transition-colors font-albert"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dokumenty
            </Link>
            <Link 
              to="/bratislava/vozidla" 
              className="px-6 py-3 text-black uppercase font-semibold hover:bg-zvyky-blue hover:text-white transition-colors font-albert"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vozidlá
            </Link>
            <Link 
              to="/bratislava/kontakt" 
              className="mx-6 mt-3 py-3 bg-zvyky-blue text-white uppercase font-semibold hover:opacity-90 transition-all font-albert text-center rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              KONTAKT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default BratislavaNavigation


