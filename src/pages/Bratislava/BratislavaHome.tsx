import React from 'react'
import { Link } from 'react-router-dom'

const BratislavaHome = () => {
  const [isMapOpen, setIsMapOpen] = React.useState(false);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-screen min-h-[600px] md:min-h-[700px] lg:h-[70vh] lg:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/images/banner1.JPG')"
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-10 drop-shadow-2xl font-inter leading-relaxed uppercase tracking-normal">
              <div className="whitespace-nowrap mb-1 sm:mb-2 md:mb-4">VODIČSKÝ PREUKAZ</div>
              <div className="whitespace-nowrap mb-1 sm:mb-2 md:mb-4">S NAMI</div>
              <div className="whitespace-nowrap">ĽAHKO A RÝCHLO</div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="/bratislava/kurzy"
                className="bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-6 sm:px-8 md:px-10 py-3 md:py-4 text-base sm:text-lg md:text-xl rounded-lg transition-all font-karla text-center"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* A1 Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img
                  src="/images/A1_foto.JPG"
                  alt="A1 Kurz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-4xl font-extrabold mb-2 font-inter">A1</h3>
                <h4 className="text-lg font-bold mb-3 font-inter">Motocykel s objemom do 125cm3 a výkonom do 11 kW</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€) a poplatok za kurz prvej pomoci
                </p>
                <Link
                  to="/bratislava/kurzy/a1"
                  className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert mt-auto text-center block"
                >
                  Viac informácií
                </Link>
              </div>
            </div>

            {/* B Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img
                  src="/images/B_picture.JPG"
                  alt="B Kurz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-4xl font-extrabold mb-2 font-inter">B</h3>
                <h4 className="text-lg font-bold mb-3 font-inter">Osobné vozidlo do 3,5 t.</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Cena nezahŕňa správny poplatok za skúšku (kolok 33€) a poplatok za kurz prvej pomoci
                </p>
                <Link
                  to="/bratislava/kurzy/b"
                  className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert mt-auto text-center block"
                >
                  Viac informácií
                </Link>
              </div>
            </div>

            {/* A2 Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img
                  src="/images/A2_photo.JPG"
                  alt="A2 Kurz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-4xl font-extrabold mb-2 font-inter">A2</h3>
                <h4 className="text-lg font-bold mb-3 font-inter">Motocykel s výkonom do 35 kW</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€) a poplatok za kurz prvej pomoci
                </p>
                <Link
                  to="/bratislava/kurzy/a2"
                  className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert mt-auto text-center block"
                >
                  Viac informácií
                </Link>
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
            {/* Top Section - Large Card with Text Overlay */}
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mb-6 md:mb-8">
              {/* Background Image - Classroom */}
              <img
                src="/images/BA_PR.JPG"
                alt="Priestory"
                className="w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-6 sm:px-8 md:px-12 lg:px-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 md:mb-8 font-inter">Priestory</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white max-w-3xl md:max-w-4xl leading-relaxed">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left - Instructions */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <span className="text-xl md:text-2xl font-bold text-black flex-shrink-0">1.</span>
                <div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Nájdete nás na ulici <span className="font-semibold">Záhradnícka 4882/46, 821 08 Bratislava</span> - sme v blízkosti (orientačný bod,
                    napr. zastávky, školy, obchodného centra)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <span className="text-xl md:text-2xl font-bold text-black flex-shrink-0">2.</span>
                <div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Vstpe do budovy - sme v budove (popre, napr. schodenom vstupom / z ľavej
                    strany budovy. / popísat ako vstup)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <span className="text-xl md:text-2xl font-bold text-black flex-shrink-0">3.</span>
                <div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Hľadajte veľký nápis <span className="font-semibold">"AUTOŠKOLA ZVYKY"</span> - nájdete nás na (poschodí),
                    hneď pri vstupe/vľavo/vpravo.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div
              onClick={() => setIsMapOpen(true)}
              className="bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 cursor-pointer hover:shadow-2xl transition-shadow relative group"
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
