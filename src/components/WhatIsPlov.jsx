import React from 'react'
import { useTranslation } from 'react-i18next'

function WhatIsPlov() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#29160c] text-yellow-100 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        {t('what.title')}
      </h2>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-yellow-300 leading-relaxed">
        {t('what.description')}
      </p>
    </section>
  )
}

export default WhatIsPlov
