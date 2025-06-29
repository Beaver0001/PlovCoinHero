import React from 'react'
import { useTranslation } from 'react-i18next'
import bgImage from '../assets/hero-meme-bg.png'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="text-yellow-100 text-center py-28 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#1a0a05'
      }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        {t('hero.title')}
      </h1>
      <p className="text-xl md:text-2xl italic text-yellow-300 mb-10">
        {t('hero.subtitle')}
      </p>

      <div>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow hover:bg-yellow-300 transition"
        >
          🔥 Buy $PLOV (Coming Soon)
        </a>
      </div>
    </section>
  )
}

export default HeroSection
