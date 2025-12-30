import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import MalackyNavigation from './components/MalackyNavigation'
import Footer from './components/Footer'
import LocationSelector from './pages/LocationSelector'
import BratislavaHome from './pages/BratislavaHome'
import MalackyHome from './pages/MalackyHome'

function App() {
  return (
    <Router>
      <Routes>
        {/* Location Selector - No Nav/Footer */}
        <Route path="/" element={<LocationSelector />} />
        
        {/* Bratislava Route with Navigation and Footer */}
        <Route path="/bratislava" element={
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              <BratislavaHome />
            </main>
            <Footer />
          </div>
        } />
        
        {/* Malacky Route with Navigation and Footer */}
        <Route path="/malacky" element={
          <div className="min-h-screen flex flex-col">
            <MalackyNavigation />
            <main className="flex-grow">
              <MalackyHome />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App

