import React from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import HeroSection from './components/HeroSection'
import WhatIsPlov from './components/WhatIsPlov'
import TokenomicsBlock from './components/TokenomicsBlock'
import RoadmapBlock from './components/RoadmapBlock'

function App() {
  return (
    <div className="relative bg-[#1a0a05] min-h-screen text-white">
      <LanguageSwitcher />
      <HeroSection />
      <WhatIsPlov />
      <TokenomicsBlock  />
      <RoadmapBlock />
    </div>
  )
}

export default App
// preview trigger
// second trigger


