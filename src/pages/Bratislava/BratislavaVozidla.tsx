const BratislavaVozidla = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 md:mb-16 font-inter">NA ČOM JAZDÍME</h1>
        


        {/* Hyundai i20 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/H_i20_BA.JPG" 
              alt="Hyundai i20" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zvyky-blue mb-4 font-inter">Hyundai i20 (III. generácia)</h2>
            <h3 className="text-xl font-semibold text-black mb-6">Hatchback | benzín | manuál</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Výbava zahŕňa klimatizáciu, rádio, dotykový displej a ďalšie prvky pre komfortný a sústredený výcvik</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Moderné, kompaktné a bezpečné vozidlo – ideálne do mesta aj pre začínajúcich vodičov</span>
              </li>
              <li className="flex items-start">
                <span className="text-zvyky-blue mr-2">✓</span>
                <span>Asistenčné systémy a dobrý výhľad z vozidla pre jednoduché parkovanie a istotu za volantom</span>
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
                src="/images/h_i20_ba_2.JPG" 
                alt="Hyundai i20" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/H_i20_BA.JPG" 
                alt="Hyundai i20" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/images/h_i20_ba_3.JPG" 
                alt="Vozidlo 3" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BratislavaVozidla


