const MalackyHome = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-screen min-h-[900px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/images/banner1.JPG')"
        }}
      >
        <div className="relative z-10 container mx-auto px-8 md:px-16">
          <div className="max-w-7xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-10 drop-shadow-2xl font-inter leading-relaxed uppercase tracking-normal">
              <div className="whitespace-nowrap mb-2 md:mb-4">VODIČSKÝ PREUKAZ</div>
              <div className="whitespace-nowrap mb-2 md:mb-4">S NAMI</div>
              <div className="whitespace-nowrap">ĽAHKO A RÝCHLO</div>
            </h1>
            <div className="flex gap-6">
              <a 
                href="/malacky/kurzy"
                className="bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-10 py-4 text-lg md:text-xl rounded-lg transition-all font-karla"
              >
                Kurzy
              </a>
              <a 
                href="/malacky/prihlaska"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-zvyky-blue text-white uppercase font-semibold px-10 py-4 text-lg md:text-xl rounded-lg transition-all font-karla"
              >
                Online prihláška
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
      {/* Naše kurzy Section */}
      <section className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-12 font-inter">Naše kurzy</h2>
        
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

      {/* Testimonials Section */}
      <section className="mb-16 py-12">
        <h2 className="text-5xl font-bold text-black mb-12 font-inter">Čo o nás hovoria...</h2>
        
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow -ml-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-12">
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

          {/* Right Arrow */}
          <button className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow -mr-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Gift Voucher Section */}
      <section className="mb-16 py-12">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-black mb-8 font-inter">
            Darujte darčekovú poukážku
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hľadáte originálny darček? Potešte svojich blízkych praktickým darčekom, 
            ktorý im otvorí dvere k novej životnej etape. S našimi darčekovými 
            poukážkami na kurz riadenia darujete nezabudnuteľný zážitok a šancu na 
            nezávislosť na cestách.
          </p>
        </div>
      </section>

      {/* Kde nás nájdete Section */}
      <section className="mb-16 py-12">
        <h2 className="text-5xl font-bold text-black mb-12 font-inter">Kde nás nájdete</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Instructions */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-black flex-shrink-0">1.</span>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Nájdete nás na ulici <span className="font-semibold">NÁZOV ULICE</span> (ČÍSLO) - sme v blízkosti (orientačný bod, 
                  napr. zastávky, školy, obchodného centra)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl font-bold text-black flex-shrink-0">2.</span>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Vstupe do budovy - sme v budove (popre, napr. schodenom vstupom / z ľavej 
                  strany budovy. / popísat ako vstup)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl font-bold text-black flex-shrink-0">3.</span>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Hľadajte veľký nápis <span className="font-semibold">"AUTOŠKOLA ZVYKY"</span> - nájdete nás na (poschodí), 
                  hneď pri vstupe/vľavo/vpravo.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.5!2d17.0!3d48.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDI0JzAwLjAiTiAxN8KwMDAnMDAuMCJF!5e0!3m2!1sen!2ssk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Proč si vybrat naši pobočku v Malackách?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">✓ Zkušení instruktoři</h3>
            <p className="text-gray-600">
              Naši instruktoři mají mnohaleté zkušenosti a individuální přístup.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">✓ Moderní vozidla</h3>
            <p className="text-gray-600">
              Využíváme nejnovější modely vozidel s moderními bezpečnostními prvky.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">✓ Flexibilní rozvrh</h3>
            <p className="text-gray-600">
              Přizpůsobíme se vašemu času a potřebám.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">✓ Vysoká úspěšnost</h3>
            <p className="text-gray-600">
              Naši studenti mají vysokou úspěšnost u závěrečných zkoušek.
            </p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Kontaktní informace - Malacky
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold">Adresa:</p>
              <p className="text-gray-600">Kláštorné námestie 1161/7, 901 01 Malacky, Slovensko</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <div>
              <p className="font-semibold">Telefón:</p>
              <p className="text-gray-600">+421 987 654 321</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default MalackyHome

