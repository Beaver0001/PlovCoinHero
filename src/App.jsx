import React from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import HeroSection from './components/HeroSection'
import WhatIsPlov from './components/WhatIsPlov'
import TokenomicsChart from './components/TokenomicsChart'
import RoadmapBlock from './components/RoadmapBlock'

function App() {
  return (
    <div className="relative bg-[#1a0a05] min-h-screen text-white">
      <LanguageSwitcher />
      <HeroSection />
      <WhatIsPlov />
      <TokenomicsChart />
      <RoadmapBlock />
    </div>
  )
}

export default App



