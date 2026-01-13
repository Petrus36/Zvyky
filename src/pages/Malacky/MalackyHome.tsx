import React from 'react'
import { Link } from 'react-router-dom'

const MalackyHome = () => {
  const [isMapOpen, setIsMapOpen] = React.useState(false);
  const testimonialsRef = React.useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsRef.current) {
      const scrollAmount = testimonialsRef.current.offsetWidth / 2;
      testimonialsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-screen min-h-[500px] md:min-h-[700px] lg:h-[85vh] lg:min-h-[800px] bg-cover bg-center bg-no-repeat flex items-center -mt-16 md:-mt-20"
        style={{
          backgroundImage: "url('/images/banner1.JPG')"
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl">
            {/* Mobile/Tablet view - larger, bolder and dynamic layout */}
            <h1 className="block lg:hidden text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl font-inter leading-tight uppercase tracking-normal text-left mt-12 md:mt-0">
              <div className="mb-2 md:mb-5">VODIČSKÝ</div>
              <div className="mb-2 md:mb-5">PREUKAZ</div>
              <div className="mb-2 md:mb-5">S NAMI</div>
              <div className="mb-2 md:mb-5">ĽAHKO A RÝCHLO</div>
            </h1>
            
            {/* Desktop view - UNCHANGED */}
            <h1 className="hidden lg:block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-10 drop-shadow-2xl font-inter leading-relaxed uppercase tracking-normal">
              <div className="whitespace-nowrap mb-2 md:mb-4">VODIČSKÝ PREUKAZ</div>
              <div className="whitespace-nowrap mb-2 md:mb-4">S NAMI</div>
              <div className="whitespace-nowrap">ĽAHKO A RÝCHLO</div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <Link 
                to="/malacky/kurzy"
                className="bg-zvyky-blue hover:opacity-90 text-white uppercase font-semibold px-3 sm:px-8 md:px-10 py-3 md:py-4 text-base sm:text-lg md:text-xl rounded-lg transition-all font-karla text-center w-1/2 sm:w-auto"
              >
                Kurzy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
      {/* Naše kurzy Section */}
      <section className="mb-8 md:mb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Naše kurzy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
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
                to="/malacky/kurzy/a1"
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
                to="/malacky/kurzy/b"
                className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-6 py-2 rounded-lg transition-all font-semibold uppercase text-sm font-albert mt-auto text-center block"
              >
                Viac informácií
              </Link>
            </div>
          </div>

          {/* A2 Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:col-span-2 md:mx-auto md:max-w-md lg:col-span-1 lg:max-w-none">
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
                to="/malacky/kurzy/a2"
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
            to="/malacky/kurzy"
            className="inline-block bg-zvyky-blue hover:opacity-90 text-white px-12 py-3 rounded-lg transition-all font-semibold uppercase text-base font-albert"
          >
            Všetky kurzy
          </Link>
        </div>
      </section>

      {/* Na čom jazdíme Section */}
      <section className="mb-8 md:mb-16 py-6 md:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Na čom jazdíme</h2>
        
        <div className="max-w-full lg:max-w-[95%] xl:max-w-[98%] mr-auto ml-0 sm:ml-6 md:ml-8 lg:ml-12">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] group">
            {/* Background Image */}
            <img 
              src="/images/hiundaz_i20_Zvyka.JPG" 
              alt="Hyundai i20" 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 px-6 sm:px-8 md:px-12 lg:px-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 font-inter">Hyundai i20</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-4 max-w-full sm:max-w-xl lg:max-w-2xl">
              Spoľahlivé a praktické auto pre budúcich vodičov
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed">
              Hyundai i20 ponúka jednoduché ovládanie, dobrý výhľad a kompaktné rozmery, vďaka ktorým sa žiaci rýchlo naučia bezpečne jazdiť v meste aj mimo neho.
              </p>
            </div>
            
            {/* Button in bottom right */}
            <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 md:bottom-20 md:right-32 lg:bottom-12 lg:right-8">
              <Link
                to="/malacky/vozidla"
                className="bg-black/50 border-2 border-white hover:bg-zvyky-blue active:bg-zvyky-blue text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all font-semibold text-xs sm:text-sm md:text-base font-albert uppercase inline-block"
              >
                Pozri si všetky vozidlá
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 md:mb-16 py-6 md:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-inter">Čo o nás hovoria...</h2>
        
        <div className="relative flex items-center">
          {/* Left Arrow - Hidden on mobile, visible on tablet, hidden on desktop */}
          <button 
            onClick={() => scrollTestimonials('left')}
            className="hidden md:block lg:hidden absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow -ml-6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Cards Container - Hide overflow on tablet */}
          <div className="md:overflow-hidden lg:overflow-visible w-full px-0 md:px-12">
            <div 
              ref={testimonialsRef}
              className="grid grid-cols-1 md:flex md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-hide lg:grid lg:grid-cols-3 gap-6 md:gap-8"
            >
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow md:snap-start md:min-w-[calc(50%-1rem)] lg:min-w-0">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-600">SH</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Simona Hrivnáková</h3>
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Za mňa super prístup. Na začiatku som mala dosť stres a bála som sa, že budem robiť stále tie isté chyby, ale inštruktor to bral v kľude a všetko mi vysvetlil tak, aby som to fakt pochopila. Najviac mi pomohlo, že sme veľa trénovali reálne situácie v premávke, nielen "ideálne" trasy. Jazdy mi postupne dávali väčší zmysel a cítila som, že sa zlepšujem. Skúška bola potom už len o sústredení.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow md:snap-start md:min-w-[calc(50%-1rem)] lg:min-w-0">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-600">PŠ</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Peter Šebo</h3>
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Autoškolu by som odporučil hlavne tým, čo chcú normálny prístup bez zbytočného tlačenia. Inštruktor bol vecný, keď som niečo pokazil, povedal čo presne zmeniť a hneď sme to opakovali, kým to nebolo OK. Páčilo sa mi, že sme riešili aj parkovanie a križovatky viackrát, nie len raz a hotovo. Auto bolo čisté a jazdilo sa na ňom dobre. Jediná vec je, že niekedy sa hodina posunula o pár minút, ale nič hrozné. Celkovo dobrá skúsenosť.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow md:snap-start md:min-w-[calc(50%-1rem)] lg:min-w-0">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-600">MK</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Marek Kováč</h3>
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Autoškolu hodnotím celkovo pozitívne. Inštruktor bol v pohode, vedel vysvetliť chyby normálne a bez zbytočného stresu. Jazdy mali zmysel - nebolo to len krúženie po meste, ale vždy sme riešili konkrétne veci (križovatky, parkovanie, rozjazdy do kopca). Auto bolo udržiavané a nič na ňom "nehrkotalo". Jediné mínus je, že niekedy bolo ťažšie dohodnúť termín jazdy, hlavne ku koncu, keď mali viac ľudí. Inak som spokojný a na skúške som sa cítil pripravený.
              </p>
            </div>
            </div>
          </div>

          {/* Right Arrow - Hidden on mobile, visible on tablet, hidden on desktop */}
          <button 
            onClick={() => scrollTestimonials('right')}
            className="hidden md:block lg:hidden absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow -mr-6"
          >
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
        
        <div className="flex justify-center">
          {/* Map */}
          <div 
            onClick={() => setIsMapOpen(true)}
            className="bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 w-full max-w-4xl cursor-pointer hover:shadow-2xl transition-shadow relative group"
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all z-10 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold text-sm sm:text-base text-gray-800 transition-opacity pointer-events-auto">
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

