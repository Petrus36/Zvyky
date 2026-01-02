import React from 'react'

const MalackyHome = () => {
  const [isMapOpen, setIsMapOpen] = React.useState(false);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-screen min-h-[600px] md:min-h-[700px] lg:min-h-[900px] bg-cover bg-center bg-no-repeat flex items-center"
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
                href="/malacky/kurzy"
                className="bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-6 sm:px-8 md:px-10 py-3 md:py-4 text-base sm:text-lg md:text-xl rounded-lg transition-all font-karla text-center"
              >
                Kurzy
              </a>
              <a 
                href="/malacky/prihlaska"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-zvyky-blue text-white uppercase font-semibold px-6 sm:px-8 md:px-10 py-3 md:py-4 text-base sm:text-lg md:text-xl rounded-lg transition-all font-karla text-center"
              >
                Online prihláška
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gray-300 overflow-hidden">
              <img 
                src="/images/banner1.JPG" 
                alt="A1 Kurz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-4xl font-extrabold mb-3 font-inter">A1</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Vodičský preukaz na ľahké motocykle do 125 cm³. 
                Ideálne na bezpečné púšťanie motoriek a jazdu v meste.
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert">
                Viac informácií
              </button>
            </div>
          </div>

          {/* B Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gray-300 overflow-hidden">
              <img 
                src="/images/banner1.JPG" 
                alt="B Kurz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-4xl font-extrabold mb-3 font-inter">B</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Vodičský preukaz na osobné auto. Naučíte sa jazdiť v bežnej premávke, parkovať a zvládnuť základné situácie na cestách.
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert">
                Viac informácií
              </button>
            </div>
          </div>

          {/* A2 Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gray-300 overflow-hidden">
              <img 
                src="/images/banner1.JPG" 
                alt="A2 Kurz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-4xl font-extrabold mb-3 font-inter">A2</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Vodičský preukaz na výkonnejšie motocykle s obmedzeným výkonom. Ideálne riešenie na skúsenejších jazdcov.
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert">
                Viac informácií
              </button>
            </div>
          </div>
        </div>

        {/* Všetky kurzy Button */}
        <div className="text-center">
          <button className="bg-zvyky-blue hover:opacity-90 text-white px-12 py-3 rounded-lg transition-all font-semibold uppercase text-base font-albert">
            Všetky kurzy
          </button>
        </div>
      </section>

      {/* Na čom jazdíme Section */}
      <section className="mb-8 md:mb-16 py-6 md:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Na čom jazdíme</h2>
        
        <div className="max-w-full lg:max-w-[1600px] mr-auto ml-0 sm:ml-6 md:ml-8 lg:ml-12">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] group">
            {/* Background Image */}
            <img 
              src="/images/banner1.JPG" 
              alt="Tesla" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-12 lg:px-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 font-inter">Tesla</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-4 max-w-full sm:max-w-xl lg:max-w-2xl">
                Moderný elektromobil pre budúcich vodičov
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed">
                Tesla prináša tichú, plynulú jazdu a najnovšie technológie, vďaka ktorým si žiaci jazdu rýchlo obľúbia. Pokročilé asistenčné systémy a priateľný interiér im pomáhajú ísť sa sústrediť na premávku a bezpečné návyky za volantom.
              </p>
            </div>
            
            {/* Button in bottom right */}
            <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 md:bottom-20 md:right-32 lg:bottom-28 lg:right-56">
              <button className="bg-black/50 border-2 border-white hover:bg-zvyky-blue active:bg-zvyky-blue text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all font-semibold text-xs sm:text-sm md:text-base font-albert uppercase">
                Pozri si všetky vozidlá
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 md:mb-16 py-6 md:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Čo o nás hovoria...</h2>
        
        <div className="relative flex items-center">
          {/* Left Arrow - Hidden on mobile */}
          <button className="hidden md:block absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow -ml-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full px-0 md:px-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-600">AP</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Andrej P.</h3>
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Do autoškoly som išiel s veľkým stressom, ale instruktor bol taký príjemný, že som sa rýchlo upokojil. Teória bola prebraná jasne, veľa vecí dával na reálne príklady z ciest, takže som to ľahko pochopil. Na jazdách som si cítil istotu a pripravenosť, študijný materiál mi prípadal prehľadný.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-600">DV</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Denis V.</h3>
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Autoškola ma super pripúla s čonom - volky sa riešilo stresové na tesných dážach a jazda mi verme! Skúsenosť bola pozitívna, necítil som sa ako "len ďalší študent". Auto bolo v perfektnom stave, jazy mali hlavu a pätu, každá hodina mala svoj cieľ. Vrátka film sa rýchlým spôsobiť nové a hustej premenkou.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-600">PŠ</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Peter Š.</h3>
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Na tejto autoškole sa mi páčila najmä úprimnosť a profesionálny prístup. Naučili sa mňa materiál, aj keď som spravila chybu, ale vždy som vysvätila. Čo sa dokázalo osvedčilo sa odporúčam každému, kto chce nielen správne vodičské a aj cítiť istotu za volantom.
              </p>
            </div>
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button className="hidden md:block absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow -mr-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
                   Nájdete nás na ulici <span className="font-semibold">Záhorácka 52/24, 901 01 Malacky</span> - sme v blízkosti (orientačný bod, 
                   napr. zastávky, školy, obchodného centra)
                 </p>
               </div>
             </div>

            <div className="flex gap-3 md:gap-4">
              <span className="text-xl md:text-2xl font-bold text-black flex-shrink-0">2.</span>
              <div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Vstupe do budovy - sme v budove (popre, napr. schodenom vstupom / z ľavej 
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
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.8!2d17.2326!3d48.4103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e3a8e8e8e8f%3A0x0!2sZ%C3%A1hor%C3%A1cka%2052%2F24%2C%20901%2001%20Malacky!5e0!3m2!1sen!2ssk!4v1234567890"
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

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
      <section className="mb-8 md:mb-16 py-6 md:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">
          Máš otázky?... neváhaj nás kontaktovať
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="meno a priezvisko"
                className="w-full px-6 py-4 rounded-full bg-zvyky-blue text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-zvyky-blue/50"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full px-6 py-4 rounded-full bg-zvyky-blue text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-zvyky-blue/50"
              />
              <textarea
                placeholder="správa..."
                rows={6}
                className="w-full px-6 py-4 rounded-3xl bg-zvyky-blue text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-zvyky-blue/50 resize-none"
              ></textarea>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white rounded-full p-3 md:p-4 shadow-md flex-shrink-0">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-base sm:text-lg md:text-2xl font-semibold text-black break-all">mail@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white rounded-full p-3 md:p-4 shadow-md flex-shrink-0">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-base sm:text-lg md:text-2xl font-semibold text-black">+421 903 765 888</span>
            </div>
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

export default MalackyHome

