import React from 'react'
import { useTranslation } from 'react-i18next'
import bgImage from '../assets/hero-meme-bg.png'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="text-yellow-100 text-center px-6 flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#1a0a05',
        minHeight: '680px'
      }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        {t('hero.title')}
      </h1>
      <p className="text-xl md:text-2xl italic text-yellow-300 mb-10">
        {t('hero.subtitle')}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow hover:bg-yellow-300 transition"
        >
          🔥 Buy $PLOV (Coming Soon)
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-block border border-yellow-400 text-yellow-200 font-semibold py-3 px-8 rounded-full opacity-50 cursor-not-allowed hover:bg-yellow-700 transition"
          title="Whitepaper coming soon"
        >
          📄 Whitepaper (Soon)
        </a>
      </div>
    </section>
  )
}

export default HeroSection
