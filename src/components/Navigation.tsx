import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
            Autoškola
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Domů
            </Link>
            <Link to="/kurzy" className="hover:text-blue-200 transition-colors">
              Kurzy
            </Link>
            <Link to="/o-nas" className="hover:text-blue-200 transition-colors">
              O nás
            </Link>
            <Link to="/kontakt" className="hover:text-blue-200 transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation



