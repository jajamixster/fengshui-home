import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import KuaCalculator from './components/KuaCalculator'
import BaguaMap from './components/BaguaMap'
import FiveElements from './components/FiveElements'
import RoomGuide from './components/RoomGuide'
import RoomInspector from './components/RoomInspector'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <KuaCalculator />
      <BaguaMap />
      <FiveElements />
      <RoomGuide />
      <RoomInspector />
      <Footer />
    </>
  )
}
