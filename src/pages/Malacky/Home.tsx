interface HomeProps {
  location?: string
}

const Home = ({ location = "Zvyky" }: HomeProps) => {
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
            Vítejte v Autoškola Zvyky - {location}
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

      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Proč si vybrat naši autoškolu?
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
      </div>
    </div>
  )
}

export default Home

