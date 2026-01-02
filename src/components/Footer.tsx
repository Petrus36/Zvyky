const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Autoškola</h3>
            <p className="text-sm md:text-base text-gray-400">
              Vaše spolehlivá volba pro získání řidičského oprávnění.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Domů
                </a>
              </li>
              <li>
                <a href="/kurzy" className="hover:text-white transition-colors">
                  Kurzy
                </a>
              </li>
              <li>
                <a href="/o-nas" className="hover:text-white transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Kontakt</h3>
            <p className="text-sm md:text-base text-gray-400">
              Email: info@autoskola.cz<br />
              Telefon: +420 123 456 789
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Autoškola. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


