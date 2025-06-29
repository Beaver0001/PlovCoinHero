import React from 'react'
import bgImage from '../assets/hero-meme-bg.png'

function HeroSection() {
  return (
    <section
      className="text-yellow-100 text-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#1a0a05',
        height: '100vh',
        paddingTop: '55vh'
      }}
    >
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
        PLOVCOIN
      </h1>
      <p className="text-xl md:text-2xl text-yellow-300 italic mb-10 tracking-wide">
        $PLOV IS COOKING 🥄🔥
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow hover:bg-yellow-300 transition"
        >
          BUY $PLOV
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-block border border-yellow-400 text-yellow-200 font-semibold py-3 px-8 rounded-full opacity-50 cursor-not-allowed hover:bg-yellow-700 transition"
          title="Whitepaper coming soon"
        >
          WHITEPAPER
        </a>
      </div>
    </section>
  )
}

export default HeroSection
