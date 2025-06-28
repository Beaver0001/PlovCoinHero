import React from "react"
import Hero from "./components/Hero"
import AboutBlock from "./components/AboutBlock"
import TokenomicsBlock from "./components/TokenomicsBlock"
import RoadmapBlock from "./components/RoadmapBlock"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <AboutBlock />
      <TokenomicsBlock />
      <RoadmapBlock />
    </div>
  )
}
// rebuild trigger for Vercel
// vite deploy trigger


export default App
