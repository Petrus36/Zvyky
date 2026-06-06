import React from 'react'
import MalackyNavigation from './MalackyNavigation'
import BratislavaNavigation from './BratislavaNavigation'
import Footer from './Footer'

type LocationLayoutProps = {
  location: 'malacky' | 'bratislava'
  children: React.ReactNode
}

const LocationLayout = ({ location, children }: LocationLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    {location === 'bratislava' ? <BratislavaNavigation /> : <MalackyNavigation />}
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
)

export default LocationLayout
