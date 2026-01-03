import React from 'react'

const BratislavaKontakt = () => {
  const [isMapOpen, setIsMapOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 font-inter text-center">KONTAKT</h1>
        <p className="text-center text-gray-600 text-lg mb-12 md:mb-16 max-w-3xl mx-auto">
          Máte otázky? Radi vám pomôžeme. Kontaktujte nás telefonicky, emailom alebo nás navštívte osobne.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zvyky-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-zvyky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2">Email</h3>
                  <a 
                    href="mailto:zvykyautoskola@gmail.com" 
                    className="text-zvyky-blue hover:text-teal-600 transition-colors text-lg font-semibold break-all"
                  >
                    zvykyautoskola@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-zvyky-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-zvyky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-4">Telefónne čísla</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Zdeno</p>
                      <a 
                        href="tel:+421905748441" 
                        className="text-zvyky-blue hover:text-teal-600 transition-colors text-xl font-bold"
                      >
                        0905 748 441
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Miška</p>
                      <a 
                        href="tel:+421918472651" 
                        className="text-zvyky-blue hover:text-teal-600 transition-colors text-xl font-bold"
                      >
                        0918 472 651
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zvyky-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-zvyky-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2">Adresa</h3>
                  <p className="text-gray-700 text-lg">
                    Záhorácka 52/24<br />
                    901 01 Malacky
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-gradient-to-br from-zvyky-blue to-teal-600 rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3">Otváracie hodiny</h3>
                  <div className="space-y-1 text-white/90">
                    <p>Pondelok - Piatok: 8:00 - 18:00</p>
                    <p>Sobota: 9:00 - 13:00</p>
                    <p>Nedeľa: Zatvorené</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div 
              onClick={() => setIsMapOpen(true)}
              className="relative h-full min-h-[500px] cursor-pointer group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.8!2d17.2326!3d48.4103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e3a8e8e8e8f%3A0x0!2sZ%C3%A1hor%C3%A1cka%2052%2F24%2C%20901%2001%20Malacky!5e0!3m2!1sen!2ssk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white px-6 py-3 rounded-lg shadow-xl font-semibold text-gray-800 transition-opacity">
                  Kliknite pre otvorenie interaktívnej mapy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-zvyky-blue to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">Začnite svoju cestu k vodičskému preukazu</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Neváhajte nás kontaktovať a dohodnite si prvú jazdu alebo konzultáciu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+421905748441"
              className="bg-white text-zvyky-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Zavolať teraz
            </a>
            <a 
              href="mailto:zvykyautoskola@gmail.com"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-zvyky-blue font-bold py-4 px-8 rounded-lg transition-all text-lg"
            >
              Napísať email
            </a>
          </div>
        </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.8!2d17.2326!3d48.4103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e3a8e8e8e8f%3A0x0!2sZ%C3%A1hor%C3%A1cka%2052%2F24%2C%20901%2001%20Malacky!5e0!3m2!1sen!2ssk!4v1234567890"
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

export default BratislavaKontakt

