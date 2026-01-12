const MalackyVozidla = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 md:mb-16 font-inter">NA ČOM JAZDÍME</h1>
        
        {/* Top 3 Cars Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/aaaaa.JPG" 
              alt="Hyundai i20" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/2222.JPG" 
              alt="Hyundai i20" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/H_i20_Č_M.JPG" 
              alt="Hyundai i20" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Hyundai i20 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/hiundaz_i20_Zvyka.JPG" 
              alt="Hyundai i20" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zvyky-blue mb-4 font-inter">Hyundai i20</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6">Hatchback • Benzín • ideálne pre začiatočníkov</h3>
            <ul className="space-y-4 text-gray-700 text-lg md:text-xl">
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2 text-xl md:text-2xl">✓</span>
                <span>Manuálna 6-stupňová prevodovka – perfektná kontrola pre výcvik</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2 text-xl md:text-2xl">✓</span>
                <span>Kompaktné rozmery – jednoduché parkovanie a manévrovanie v meste</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2 text-xl md:text-2xl">✓</span>
                <span>Moderné bezpečnostné systémy – ABS, ESP, asistenčné systémy vodiča</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2 text-xl md:text-2xl">✓</span>
                <span>Ideálne pre začiatočníkov – prehľadné ovládanie, dobrý výhľad z vozidla</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Galéria vozidiel Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-12 font-inter">Galéria vozidiel</h2>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/hiundaz_i20_Zvyka.JPG" 
                alt="Hyundai i20" 
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/2222.JPG" 
                alt="Hyundai i20" 
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/aaaaa.JPG" 
                alt="Hyundai i20" 
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/Interier_i20_M.JPG" 
                alt="Hyundai i20" 
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/H_i20_Č_M.JPG" 
                alt="Hyundai i20 Interiér" 
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/H_i20_Š.JPG" 
                alt="Vozidlo 6" 
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MalackyVozidla

