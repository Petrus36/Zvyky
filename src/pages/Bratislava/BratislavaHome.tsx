import React from 'react'
import { Link } from 'react-router-dom'

const BratislavaHome = () => {
  const [isMapOpen, setIsMapOpen] = React.useState(false);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-screen min-h-[600px] md:min-h-[700px] lg:h-[75vh] lg:min-h-[700px] xl:h-[80vh] xl:min-h-[700px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/images/banner1.JPG')"
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl">
            {/* Mobile view - larger, bolder and dynamic layout */}
            <h1 className="block sm:hidden text-6xl font-extrabold text-white mb-6 drop-shadow-2xl font-inter leading-tight uppercase tracking-normal text-left">
              <div className="mb-3">VODIČSKÝ</div>
              <div className="mb-3 pl-4">PREUKAZ</div>
              <div className="mb-3">S NAMI</div>
              <div className="pl-6">ĽAHKO A RÝCHLO</div>
            </h1>
            
            {/* Desktop/Tablet view - UNCHANGED */}
            <h1 className="hidden sm:block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-10 drop-shadow-2xl font-inter leading-relaxed uppercase tracking-normal">
              <div className="whitespace-nowrap mb-2 md:mb-4">VODIČSKÝ PREUKAZ</div>
              <div className="whitespace-nowrap mb-2 md:mb-4">S NAMI</div>
              <div className="whitespace-nowrap">ĽAHKO A RÝCHLO</div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <a
                href="/bratislava/kurzy"
                className="bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-3 sm:px-8 md:px-10 py-3 md:py-4 text-base sm:text-lg md:text-xl rounded-lg transition-all font-karla text-center w-1/2 sm:w-auto"
              >
                Kurzy
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
        {/* Naše kurzy Section */}
        <section className="mb-8 md:mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Naše kurzy</h2>

          {/* Featured Course - B Card - Horizontal Layout */}
          <div className="max-w-6xl mx-auto mb-12">
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

          {/* Všetky kurzy Button */}
          <div className="text-center">
            <Link
              to="/bratislava/kurzy"
              className="inline-block bg-zvyky-blue hover:opacity-90 text-white px-12 py-3 rounded-lg transition-all font-semibold uppercase text-base font-albert"
            >
              Všetky kurzy
            </Link>
          </div>
        </section>

        {/* Priestory Section */}
        <section className="mb-8 md:mb-16 py-6 md:py-12">
          <div className="max-w-full lg:max-w-[95%] xl:max-w-[98%] mx-auto">
            {/* Mobile - Headline Above Image */}
            <h2 className="block sm:hidden text-4xl font-bold text-black mb-6 font-inter">Priestory</h2>

            {/* Mobile - Description Card Above Image */}
            <div className="block sm:hidden bg-white rounded-2xl shadow-lg p-6 mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Naša autoškola ponúka moderné, čisté a príjemné priestory, v ktorých sa budete cítiť komfortne už od prvej chvíle. Máme najmodernejšie vybavenie na výučbu, vďaka ktorému sú teória aj príprava jednoduchšie a zrozumiteľnejšie. Chceme, aby ste sa u nás cítili uvoľnene, bezpečne a mali ideálne podmienky na učenie aj sústredenie.
              </p>
            </div>

            {/* Top Section - Large Card with Text Overlay */}
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mb-6 md:mb-8">
              {/* Background Image - Classroom */}
              <img
                src="/images/BA_PR.JPG"
                alt="Priestory"
                className="w-full h-full object-cover"
              />

              {/* Desktop - Content Overlay */}
              <div className="hidden sm:flex absolute inset-0 flex-col justify-end pb-12 md:pb-16 lg:pb-20 px-8 md:px-12 lg:px-16">
                <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 md:mb-8 font-inter">Priestory</h2>
                <p className="text-lg md:text-xl lg:text-xl text-white max-w-3xl md:max-w-4xl leading-relaxed">
                  Naša autoškola ponúka moderné, čisté a príjemné priestory, v ktorých sa budete cítiť komfortne už od prvej chvíle. Máme najmodernejšie vybavenie na výučbu, vďaka ktorému sú teória aj príprava jednoduchšie a zrozumiteľnejšie. Chceme, aby ste sa u nás cítili uvoľnene, bezpečne a mali ideálne podmienky na učenie aj sústredenie.
                </p>
              </div>
            </div>

            {/* Bottom Section - Two Smaller Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Image - Driving Simulator */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src="/images/TR_BA.JPG"
                  alt="Simulátor jazdy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Image - Classroom with STOP */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src="/images/PR_BA.JPG"
                  alt="Teoretická učebňa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gift Voucher Section */}
        <section className="mb-8 md:mb-16 py-6 md:py-12">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 md:mb-8 font-inter">
              Darujte darčekovú poukážku
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Hľadáte originálny darček? Potešte svojich blízkych praktickým darčekom,
              ktorý im otvorí dvere k novej životnej etape. S našimi darčekovými
              poukážkami na kurz riadenia darujete nezabudnuteľný zážitok a šancu na
              nezávislosť na cestách.
            </p>
          </div>
        </section>

        {/* Kde nás nájdete Section */}
        <section className="mb-8 md:mb-16 py-6 md:py-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Kde nás nájdete</h2>

          <div className="flex justify-center">
            {/* Map */}
            <div
              onClick={() => setIsMapOpen(true)}
              className="bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 w-full max-w-4xl cursor-pointer hover:shadow-2xl transition-shadow relative group"
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all z-10 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold text-sm sm:text-base text-gray-800 transition-opacity">
                  Kliknite pre otvorenie mapy
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5!2d17.1!3d48.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sZ%C3%A1hradn%C3%ADcka%204882%2F46%2C%20821%2008%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>


      {/* Map Popup Modal */}
      {isMapOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsMapOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-6xl h-[80vh] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5!2d17.1!3d48.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sZ%C3%A1hradn%C3%ADcka%204882%2F46%2C%20821%2008%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      )}
    </div>
  )
}

export default BratislavaHome
