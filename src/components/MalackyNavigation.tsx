import { Link } from 'react-router-dom'

const MalackyNavigation = () => {
  return (
    <nav 
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)'
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/malacky" className="flex items-center -ml-8 md:-ml-12">
            <img 
              src="/images/zvyky_autoskola_TRUE_TRANSPARENT.webp" 
              alt="Zvyky Autoškola Logo" 
              className="h-8 md:h-10"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end pr-8 lg:pr-16">
            <Link 
              to="/malacky" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert"
            >
              Domov
            </Link>
            <Link 
              to="/malacky/kurzy" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert"
            >
              Kurzy
            </Link>
            <Link 
              to="/malacky/dokumenty" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert"
            >
              Dokumenty
            </Link>
            <Link 
              to="/malacky/vozidla" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert"
            >
              Vozidlá
            </Link>
            <Link 
              to="/malacky/referencie" 
              className="text-black uppercase font-semibold hover:text-zvyky-blue transition-colors font-albert"
            >
              Referencie
            </Link>
          </div>
        </div>
      </div>
      
      {/* Contact Button - Positioned absolutely to the right edge */}
      <Link
        to="/malacky/kontakt"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-6 py-2 rounded-lg transition-all font-albert mr-4 md:mr-8 lg:mr-12 z-20"
      >
        KONTAKT
      </Link>
    </nav>
  )
}

export default MalackyNavigation

