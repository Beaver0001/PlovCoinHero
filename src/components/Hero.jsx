import React from "react"
import bgImage from "../assets/hero-meme-bg.png"

function Hero() {
  return (
    <section
      className="min-h-screen w-full bg-no-repeat bg-cover bg-center text-[#f9e3b5] flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg mb-4 tracking-wide uppercase">
        PLOVCOIN
      </h1>
      <p className="text-xl md:text-2xl mb-10 font-semibold tracking-wider text-yellow-300">
        $PLOV IS COOKING ☄️🔥
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <button className="bg-yellow-400 text-black px-8 py-4 text-xl font-bold rounded-full shadow-xl hover:bg-yellow-500 transition">
          BUY $PLOV
        </button>
        <button className="bg-yellow-400 text-black px-8 py-4 text-xl font-bold rounded-full shadow-xl hover:bg-yellow-500 transition">
          WHITEPAPER
        </button>
      </div>
    </section>
  )
}

export default Hero
