import React from 'react'
import { Link } from 'react-router-dom'

const KurzA1Detail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-5xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-inter">Kurz A1</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              Motocykel s objemom do 125 cm³ a výkonom do 11 kW. Ideálny kurz pre začiatočníkov, ktorí chcú začať jazdiť na motocykli.
            </p>
            
            {/* Key Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-zvyky-blue">
                <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-600">Teória</div>
                <div className="text-3xl md:text-4xl font-bold text-black">32 hodín</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-600">Prax</div>
                <div className="text-3xl md:text-4xl font-bold text-black">18 hodín</div>
              </div>
              <div className="bg-gradient-to-br from-zvyky-blue to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-white/90">Cena</div>
                <div className="text-3xl md:text-4xl font-bold">999 €</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-12 font-inter">Podrobnosti kurzu</h2>
          
          {/* Conditions Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-inter">
              Aké sú podmienky na udelenie vodičského oprávnenia skupiny A1?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">dosiahnutý vek 16 rokov</strong> (v čase skúšky)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">absolvovanie vodičského kurzu skupiny A1</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">zdravotná spôsobilosť</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">absolvovanie skúšky z odbornej spôsobilosti</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">splnenie ďalších podmienok</strong> podľa zákona o cestnej premávke</span>
              </li>
            </ul>
          </div>

          {/* Course Structure Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-inter">
              Z čoho pozostáva vodičský kurz skupiny A1?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Vodičský kurz pozostáva z:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-600">Teória</div>
                <div className="text-2xl font-bold text-black mb-3">32 vyučovacích hodín</div>
                <p className="text-sm text-gray-600">(1 vyučovacia hodina = 45 minút)</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-600">Praktický výcvik</div>
                <div className="text-2xl font-bold text-black mb-3">18 vyučovacích hodín</div>
                <p className="text-sm text-gray-600">(1 vyučovacia hodina = 45 minút)</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-zvyky-blue">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                <strong className="text-black">Teória zahŕňa:</strong> pravidlá cestnej premávky, zásady bezpečnej jazdy, teóriu vedenia vozidla a základnú údržbu.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong className="text-black">Praktické jazdy</strong> prebiehajú na autocvičisku aj v cestnej premávke.
              </p>
            </div>
          </div>

          {/* Course Duration Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 font-inter">
              Ako dlho trvá vodičský kurz skupiny A1?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Závisí od tvojich časových možností a vyťaženia autoškoly. <strong className="text-black">Maximálna doba trvania kurzu je 12 mesiacov od začatia.</strong>
            </p>
          </div>

          {/* First Aid Course */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-4 font-inter">Kurz prvej pomoci</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Pred prihlásením na skúšku je potrebné absolvovať aj kurz prvej pomoci. <strong className="text-black">U nás je v cene celého kurzu.</strong>
            </p>
          </div>

          {/* Administrative Fee */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-4 font-inter">Kolok</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Kolok nie je v cene a dopláca sa na konci kurzu. Pre A1 je to <strong className="text-black">16,50 €</strong>.
            </p>
            <p className="text-sm text-gray-600">
              * Správny poplatok sa môže meniť podľa aktuálnych predpisov
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link
              to="/malacky/kontakt"
              className="bg-zvyky-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all font-semibold uppercase text-center font-albert shadow-lg hover:shadow-xl"
            >
              Prihlásiť sa na kurz
            </Link> */}
            <Link
              to="/malacky/kurzy"
              className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-8 py-4 rounded-xl transition-all font-semibold uppercase text-center font-albert"
            >
              Späť na kurzy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KurzA1Detail

