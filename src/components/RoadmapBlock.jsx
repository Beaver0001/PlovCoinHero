import React from "react"
import { useTranslation } from "react-i18next"

function RoadmapBlock() {
  const { t } = useTranslation()

  const years = ["2025", "2026", "2027"]

  return (
    <section className="bg-[#1a0a05] text-yellow-100 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">{t('roadmap.title')}</h2>
      <p className="text-lg text-yellow-300 mb-10 italic">{t('roadmap.tagline')}</p>

      <div className="max-w-5xl mx-auto space-y-16 text-left text-base md:text-lg">
        {years.map((year) => (
          <div key={year}>
            <h3 className="text-2xl font-bold mb-2">{t(`roadmap.${year}.title`)}</h3>
            <ul className="list-disc pl-6 space-y-1">
              {t(`roadmap.${year}.points`, { returnObjects: true }).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoadmapBlock


