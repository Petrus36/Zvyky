import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MalackyNavigation from './components/MalackyNavigation'
import BratislavaNavigation from './components/BratislavaNavigation'
import Footer from './components/Footer'
import LocationSelector from './pages/LocationSelector'
import BratislavaHome from './pages/Bratislava/BratislavaHome'
import BratislavaKurzy from './pages/Bratislava/BratislavaKurzy'
import BratislavaVozidla from './pages/Bratislava/BratislavaVozidla'
import BratislavaDokumenty from './pages/Bratislava/BratislavaDokumenty'
import BratislavaKontakt from './pages/Bratislava/BratislavaKontakt'
import MalackyHome from './pages/Malacky/MalackyHome'
import MalackyKurzy from './pages/Malacky/MalackyKurzy'
import KurzBDetail from './pages/Malacky/KurzBDetail'
import KurzA1Detail from './pages/Malacky/KurzA1Detail'
import KurzA2Detail from './pages/Malacky/KurzA2Detail'
import MalackyVozidla from './pages/Malacky/MalackyVozidla'
import MalackyDokumenty from './pages/Malacky/MalackyDokumenty'
import MalackyKontakt from './pages/Malacky/MalackyKontakt'

function App() {
  return (
    <Router>
      <Routes>
        {/* Location Selector - No Nav/Footer */}
        <Route path="/" element={<LocationSelector />} />
        
        {/* Bratislava Routes with BratislavaNavigation and Footer */}
        <Route path="/bratislava" element={
          <div className="min-h-screen flex flex-col">
            <BratislavaNavigation />
            <main className="flex-grow">
              <BratislavaHome />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/bratislava/kurzy" element={
          <div className="min-h-screen flex flex-col">
            <BratislavaNavigation />
            <main className="flex-grow">
              <BratislavaKurzy />
            </main>
            <Footer />
          </div>
        } />

        <Route path="/bratislava/vozidla" element={
          <div className="min-h-screen flex flex-col">
            <BratislavaNavigation />
            <main className="flex-grow">
              <BratislavaVozidla />
            </main>
            <Footer />
          </div>
        } />

        <Route path="/bratislava/dokumenty" element={
          <div className="min-h-screen flex flex-col">
            <BratislavaNavigation />
            <main className="flex-grow">
              <BratislavaDokumenty />
            </main>
            <Footer />
          </div>
        } />

        <Route path="/bratislava/kontakt" element={
          <div className="min-h-screen flex flex-col">
            <BratislavaNavigation />
            <main className="flex-grow">
              <BratislavaKontakt />
            </main>
            <Footer />
          </div>
        } />
        
        {/* Malacky Routes with MalackyNavigation and Footer */}
        <Route path="/malacky" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <MalackyHome />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/kurzy" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <MalackyKurzy />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/kurzy/b" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <KurzBDetail />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/kurzy/a1" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <KurzA1Detail />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/kurzy/a2" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <KurzA2Detail />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/vozidla" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <MalackyVozidla />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/dokumenty" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <MalackyDokumenty />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/malacky/kontakt" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <MalackyKontakt />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App

