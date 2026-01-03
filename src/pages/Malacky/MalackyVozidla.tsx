const MalackyVozidla = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 md:mb-16 font-inter">NA ČOM JAZDÍME</h1>
        
        {/* Top 3 Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Auto 1" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Auto 2" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Auto 3" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Volkswagen Passat Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Volkswagen Passat" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zvyky-blue mb-4 font-inter">Volkswagen Passat</h2>
            <h3 className="text-xl font-semibold text-black mb-6">Kombi s mild hybrid 1.5 TSi/110 kW</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Manuálna 6-stupňová prevodovka alebo 7-stupňová DSG (v závislosti od typu vozidla a požiadaviek žiaka)</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Výbava vrátane klimatizácie, rádio a ďalšie funkcie pre pohodlný výcvik</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Moderné a bezpečné vozidlo, ideálne pre začínajúcich vodičov</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Systémové a parkovacie asistenty + Špičková výbava pre maximálnu bezpečnosť a efektivitu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tesla Model 3 Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 font-inter">Tesla Model 3</h2>
          
          {/* Tesla Small Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/B_picture.JPG" 
                alt="Tesla 1" 
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/B_picture.JPG" 
                alt="Tesla 2" 
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/B_picture.JPG" 
                alt="Tesla 3" 
                className="w-full h-32 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/B_picture.JPG" 
                alt="Tesla 4" 
                className="w-full h-32 object-cover"
              />
            </div>
          </div>

          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Tesla je synonymom inovatívnych technológií, ktoré vás pripravia na budúcnosť jazdenia. Žiaci si tak môžu vyskúšať najnovšie technológie, elektromobilitu a princípy udržateľného jazdenia, ktoré ich pripravia nielen na skúšku, ale aj do reálnej dopravy.
          </p>
        </div>

        {/* Tesla Large Image with Text */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 h-96 md:h-[500px]">
          <img 
            src="/images/B_picture.JPG" 
            alt="Tesla" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-inter">Tesla</h2>
            <p className="text-white text-lg mb-6">
              Tesla prináša tichú, plynulú jazdu a najnovšie technológie, ktoré žiaci rýchlo obľúbia. Pokročilé asistenčné systémy a priateľský interiér im pomáhajú sústrediť sa na premávku a bezpečné návyky.
            </p>
          </div>
        </div>

        {/* Additional Tesla Info Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Tesla Detail" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-zvyky-blue mb-4 font-inter">Ekologické a moderné riešenie</h3>
            <p className="text-gray-700 mb-4">
              S Teslou žiaci jazdia ekologicky, úsporne a efektívne. Výcvik prebieha na tichom elektromobile s minimálnym dopadom na životné prostredie.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Nulové emisie – čistá a tichá jazda pre príjemný výcvik</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Úspora nákladov – výcvik na elektromobil je lacnejší a prispeje k udržateľnej budúcnosti dopravy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tesla Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Tesla Detail 2" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/B_picture.JPG" 
              alt="Tesla Detail 3" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MalackyVozidla

