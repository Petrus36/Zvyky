import { Link } from 'react-router-dom'

const KurzA2Detail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-5xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-inter">Kurz A2</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              Motocykel s výkonom do 35 kW. Pokročilý kurz pre tých, ktorí chcú jazdiť na výkonnejších motocykloch.
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
              Aké sú podmienky na udelenie vodičského oprávnenia skupiny A2?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">dosiahnutý vek 18 rokov</strong> (v čase skúšky)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zvyky-blue font-bold mt-1 text-xl">•</span>
                <span className="text-gray-700 flex-1"><strong className="text-black">absolvovanie vodičského kurzu skupiny A2</strong></span>
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
              Z čoho pozostáva vodičský kurz skupiny A2?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Vodičský kurz pozostáva z:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

            {/* Practical Focus Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-zvyky-blue">
              <h4 className="text-lg md:text-xl font-bold text-black mb-4 font-inter">V praxi sa zameriame na:</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-zvyky-blue font-bold mt-1">✓</span>
                  <span className="text-gray-700">bezpečnú jazdu na motocykli</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zvyky-blue font-bold mt-1">✓</span>
                  <span className="text-gray-700">plynulú jazdu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zvyky-blue font-bold mt-1">✓</span>
                  <span className="text-gray-700">prácu so spojkou/plynom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zvyky-blue font-bold mt-1">✓</span>
                  <span className="text-gray-700">brzdenie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zvyky-blue font-bold mt-1">✓</span>
                  <span className="text-gray-700">manévre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zvyky-blue font-bold mt-1">✓</span>
                  <span className="text-gray-700">jazdu v premávke</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Course Duration Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 font-inter">
              Ako dlho trvá vodičský kurz skupiny A2?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Dĺžka kurzu závisí od dostupnosti termínov a tvojho času. <strong className="text-black">Kurz môže trvať maximálne 12 mesiacov od začatia.</strong>
            </p>
          </div>

          {/* First Aid Course */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-4 font-inter">Kurz prvej pomoci</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Pred skúškou je potrebné absolvovať aj kurz prvej pomoci. <strong className="text-black">U nás je v cene celého kurzu.</strong>
            </p>
          </div>

          {/* Administrative Fee */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-4 font-inter">Kolok</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Kolok nie je v cene a dopláca sa na konci kurzu. Pre A2 je to <strong className="text-black">16,50 €</strong>.
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

export default KurzA2Detail


