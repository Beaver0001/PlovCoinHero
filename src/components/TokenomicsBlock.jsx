import React from 'react'
import { useTranslation } from 'react-i18next'

function TokenomicsBlock() {
  const { t } = useTranslation()
  const tokenomics = t('tokenomics.items', { returnObjects: true })

  return (
    <section className="bg-[#1a0a05] text-yellow-100 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">
        {t('tokenomics.title')}
      </h2>

      <div className="max-w-4xl mx-auto text-left text-lg space-y-4">
        {tokenomics.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-yellow-900 pb-2">
            <span className="font-medium">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TokenomicsBlock
