import React from 'react'
import { useTranslation } from 'react-i18next'

function PlovTaxBlock() {
  const { t } = useTranslation()
  const taxes = t('plovtax.items', { returnObjects: true })

  return (
    <section className="bg-[#2c1a10] text-yellow-100 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {t('plovtax.title')}
      </h2>

      <p className="text-yellow-300 mb-8 max-w-2xl mx-auto">{t('plovtax.description')}</p>

      <div className="max-w-xl mx-auto text-left space-y-4 text-base md:text-lg">
        {taxes.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-yellow-700 pb-2">
            <span className="font-medium text-yellow-200">{item.label}</span>
            <span className="text-yellow-300">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlovTaxBlock
