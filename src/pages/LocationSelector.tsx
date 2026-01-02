import { Link } from 'react-router-dom'

const LocationSelector = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/images/First page background.JPG')"
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      
      {/* Logo in top left corner */}
      <img 
        src="/images/zvyky_autoskola_TRUE_TRANSPARENT.webp" 
        alt="Zvyky Autoškola Logo" 
        className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 h-10 sm:h-12 md:h-16 z-20"
      />
      
      <div className="relative z-10 w-full max-w-5xl">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12 px-4">
          Kde chceš zahájit jazdu?
        </h1>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Bratislava Card */}
          <Link 
            to="/bratislava"
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-square bg-gray-200">
              <img 
                src="/images/First page background.JPG" 
                alt="Bratislava"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-karla">BRATISLAVA</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white text-center">
              <div className="flex items-start space-x-2 justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm md:text-base">
                  Seberíniho 482/1, 821 04 Bratislava, Slovensko
                </p>
              </div>
            </div>
          </Link>

          {/* Malacky Card */}
          <Link 
            to="/malacky"
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="aspect-square bg-gray-200">
              <img 
                src="/images/First page background.JPG" 
                alt="Malacky"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-karla">MALACKY</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white text-center">
              <div className="flex items-start space-x-2 justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm md:text-base">
                  Kláštorné námestie 1161/7,<br />
                  901 01<br />
                  Malacky, Slovensko
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LocationSelector

