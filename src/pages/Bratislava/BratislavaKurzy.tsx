import { Link } from 'react-router-dom'

const BratislavaKurzy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 md:mb-12 font-inter">NAŠE KURZY</h1>
        
        {/* Featured Course - B Card - Horizontal Layout */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all border-2 border-zvyky-blue/10">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-2/5 h-64 md:h-auto bg-gray-300 overflow-hidden">
                <img 
                  src="/images/B_picture.JPG" 
                  alt="B Kurz" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-3/5 p-8 lg:p-10">
                <div className="flex items-start gap-3 mb-4">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-zvyky-blue font-inter">B</h2>
                  <span className="bg-zvyky-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mt-2">Najpopulárnejší</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-inter text-gray-800">Osobné vozidlo do 3,5 t.</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Cena nezahŕňa správny poplatok za skúšku (kolok 33€) a poplatok za kurz prvej pomoci
                </p>
                
                {/* Pricing Section */}
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                  {/* Standard Price */}
                  <div className="text-center py-3 border-2 border-gray-200 rounded-xl hover:border-zvyky-blue transition-colors">
                    <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Štandardná cena</div>
                    <div className="text-2xl font-bold text-black">1111 €</div>
                  </div>
                  
                  {/* Bring a Friend */}
                  <div className="bg-gradient-to-br from-zvyky-blue to-blue-600 rounded-xl p-3 text-white hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      <div className="text-xs font-semibold uppercase tracking-wide">Priveď priateľa</div>
                    </div>
                    <div className="text-center text-xl font-bold">1061 €</div>
                    <div className="text-xs opacity-90 text-center">/ osobu</div>
                  </div>
                  
                  {/* Student Discount */}
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      <div className="text-xs font-semibold uppercase tracking-wide">Študent</div>
                    </div>
                    <div className="text-center text-xl font-bold">1050 €</div>
                    <div className="text-xs opacity-90 text-center">so preukazom</div>
                  </div>
                </div>
                
                <Link
                  to="/bratislava/kurzy/b"
                  className="w-full bg-zvyky-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all font-semibold uppercase text-sm font-albert shadow-lg hover:shadow-xl text-center block"
                >
                  Viac informácií
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kondičné jazdy */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 bg-gray-300 overflow-hidden relative">
              <img 
                src="/images/KondičneJ_photo.JPG" 
                alt="Kondičné jazdy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-extrabold mb-2 font-inter">Kondičné jazdy</h2>
              <h3 className="text-sm font-bold mb-3 font-inter">Pre držiteľa vodičského oprávnenia B (60min)</h3>
              <div className="flex-grow"></div>
              <Link
                to="/bratislava/kontakt"
                className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-3 self-start inline-block"
              >
                Viac informácií
              </Link>
              <div className="text-2xl font-bold text-black">45 €</div>
            </div>
          </div>

          {/* Osobitný výcvik */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 bg-gray-300 overflow-hidden">
              <img 
                src="/images/B_picture.JPG" 
                alt="Osobitný výcvik" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-extrabold mb-2 font-inter">Osobitný výcvik</h2>
              <h3 className="text-sm font-bold mb-3 font-inter">Pre pokročilých vodičov</h3>
              <p className="text-gray-600 mb-4 text-xs leading-relaxed flex-grow">
                Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€)
              </p>
              <Link
                to="/bratislava/kontakt"
                className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-3 self-start inline-block"
              >
                Viac informácií
              </Link>
              <div className="text-2xl font-bold text-black">1555 €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BratislavaKurzy
