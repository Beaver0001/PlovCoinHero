import React from 'react'
import LanguageSwitcher from './components/LanguageSwitcher'
import HeroSection from './components/HeroSection'
import RoadmapBlock from './components/RoadmapBlock'

function App() {
  return (
    <div className="relative bg-[#1a0a05] min-h-screen text-white">
      {/* Переключатель языка в углу */}
      <LanguageSwitcher />

      {/* Главные блоки */}
      <HeroSection />
      <RoadmapBlock />

      {/* Можно добавить Footer и другие блоки */}
    </div>
  )
}

export default App



