const BratislavaKurzy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 md:mb-16 font-inter">NAŠE KURZY</h1>
        
        {/* Kurzy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* A1 Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 md:h-56 bg-gray-300 overflow-hidden">
              <img 
                src="/images/A1_foto.JPG" 
                alt="A1 Kurz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 font-inter">A1</h2>
              <h3 className="text-base md:text-lg font-bold mb-3 font-inter">Motocykel s objemom do 125 cm3 a výkonom do 11 kW</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
              Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€) a poplatok za kurz prvej pomoci
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-4 self-start">
                Viac informácií
              </button>
              <div className="text-3xl font-bold text-black">680 €</div>
            </div>
          </div>

          {/* B Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 md:h-56 bg-gray-300 overflow-hidden">
              <img 
                src="/images/B_picture.JPG" 
                alt="B Kurz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 font-inter">B</h2>
              <h3 className="text-base md:text-lg font-bold mb-3 font-inter">Osobné vozidlo do 3,5 t.</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
              Cena nezahŕňa správny poplatok za skúšku (kolok 33€) a poplatok za kurz prvej pomoci
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-4 self-start">
                Viac informácií
              </button>
              <div className="text-3xl font-bold text-black">950 €</div>
            </div>
          </div>

          {/* A2 Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 md:h-56 bg-gray-300 overflow-hidden">
              <img 
                src="/images/A2_photo.JPG" 
                alt="A2 Kurz" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 font-inter">A2</h2>
              <h3 className="text-base md:text-lg font-bold mb-3 font-inter">Motocykel s výkonom do 35 kW</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
              Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€) a poplatok za kurz prvej pomoci
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-4 self-start">
                Viac informácií
              </button>
              <div className="text-3xl font-bold text-black">700 €</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 md:h-56 bg-gray-300 overflow-hidden">
              <img 
                src="/images/B_picture.JPG" 
                alt="Individuálny kurz B" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 font-inter">A</h2>
              <h3 className="text-base md:text-lg font-bold mb-3 font-inter">Motocykel s výkonom nad 35 kW</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
              Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€) a poplatok za kurz prvej pomoci
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-4 self-start">
                Viac informácií
              </button>
              <div className="text-3xl font-bold text-black">600 €</div>
            </div>
          </div>
           {/* Kondičné jazdy A */}
           <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
             <div className="h-48 md:h-56 bg-gray-300 overflow-hidden relative">
               <img 
                 src="/images/KondičneJ_photo.JPG" 
                 alt="Kondičné jazdy A" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black bg-opacity-30"></div>
             </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 font-inter">Kondičné jazdy</h2>
              <h3 className="text-base md:text-lg font-bold mb-3 font-inter">Pre držiteľa vodičškého oprávnenia B (60min)</h3>
              <div className="flex-grow"></div>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-4 self-start">
                Viac informácií
              </button>
              <div className="text-3xl font-bold text-black">30 €</div>
            </div>
          </div>

          {/* Osobný výcvik A2/A */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 md:h-56 bg-gray-300 overflow-hidden">
              <img 
                src="/images/B_picture.JPG" 
                alt="Kondičné jazdy B" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 font-inter">Osobitný výcvik A2/A</h2>
              <h3 className="text-base md:text-lg font-bold mb-3 font-inter"></h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
              Cena nezahŕňa správny poplatok za skúšku (kolok 16,50€)
              </p>
              <button className="border-2 border-zvyky-blue text-zvyky-blue hover:bg-zvyky-blue hover:text-white px-3 py-1 rounded-lg transition-all font-semibold uppercase text-xs font-albert mb-4 self-start">
                Viac informácií
              </button>
              <div className="text-3xl font-bold text-black">450 €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BratislavaKurzy

