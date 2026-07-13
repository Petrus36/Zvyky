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
              src="/images/Car_BA_2.JPG" 
              alt="Hyundai i20" 
              className="w-full h-full object-cover"
              decoding="async"
              fetchPriority="high"
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2 xl:col-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
              <img 
                src="/images/Car_1.JPG" 
                alt="Hyundai i20" 
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover object-[50%_22%] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
              <img 
                src="/images/Car_BA_4.JPG" 
                alt="Hyundai i20" 
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
              <img 
                src="/images/Car_BA_5.JPG" 
                alt="Hyundai i20" 
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover object-[40%_50%] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:col-span-2 xl:col-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
              <img 
                src="/images/Car_BA_6.JPG" 
                alt="Hyundai i20 – žltá" 
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:col-span-2 xl:col-span-2 flex md:justify-start">
              <div className="w-full md:w-[88%] lg:w-[82%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
                <img 
                  src="/images/Car_BA_7.JPG" 
                  alt="Hyundai i20 – žltá" 
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-full object-cover object-[50%_42%] hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-full md:w-[128%] lg:w-[138%] md:-ml-[28%] lg:-ml-[38%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
                <img 
                  src="/images/Car_BA_8.JPG" 
                  alt="Hyundai i20 – žltá" 
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:col-span-2 xl:col-span-2 flex md:justify-start">
              <div className="w-full md:w-[88%] lg:w-[82%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
                <img 
                  src="/images/Car_BA_9.JPG" 
                  alt="Hyundai i20" 
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-full md:w-[128%] lg:w-[138%] md:-ml-[28%] lg:-ml-[38%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-64 md:h-80 lg:h-96">
                <img 
                  src="/images/Car_BA_10.JPG" 
                  alt="Hyundai i20" 
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BratislavaVozidla


