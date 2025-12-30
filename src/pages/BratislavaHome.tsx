const BratislavaHome = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-[60vh] min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/First page background.JPG')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Autoškola Zvyky - Bratislava
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg">
            Profesionální výuka řízení s individuálním přístupem a moderními vozidly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🚗</div>
          <h2 className="text-xl font-semibold mb-2">Skupina B</h2>
          <p className="text-gray-600">
            Řidičské oprávnění pro osobní automobily. Nejpopulárnější kurz.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🏍️</div>
          <h2 className="text-xl font-semibold mb-2">Skupina A</h2>
          <p className="text-gray-600">
            Řidičské oprávnění pro motocykly. Pro všechny kategorie.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🚛</div>
          <h2 className="text-xl font-semibold mb-2">Skupina C</h2>
          <p className="text-gray-600">
            Řidičské oprávnění pro nákladní vozidla. Profesionální řidiči.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Proč si vybrat naši pobočku v Bratislavě?
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
          Kontaktní informace - Bratislava
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-semibold">Adresa:</p>
              <p className="text-gray-600">Seberíniho 482/1, 821 04 Bratislava, Slovensko</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <div>
              <p className="font-semibold">Telefón:</p>
              <p className="text-gray-600">+421 123 456 789</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default BratislavaHome

