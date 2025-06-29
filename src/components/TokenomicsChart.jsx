import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'
import kazanBg from '../assets/kazan-bg.png'

const COLORS = ['#facc15', '#f59e0b', '#ea580c', '#dc2626', '#7c3aed', '#059669']

function TokenomicsChart() {
  const { t } = useTranslation()
  const data = [
    { name: t('tokenomics.airdrop'), value: 38 },
    { name: t('tokenomics.liquidity'), value: 22 },
    { name: t('tokenomics.nft'), value: 10 },
    { name: t('tokenomics.marketing'), value: 13 },
    { name: t('tokenomics.team'), value: 10 },
    { name: t('tokenomics.reserve'), value: 7 }
  ]

  return (
    <section className="relative py-20 px-6 bg-[#1a0a05] text-yellow-100 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('tokenomics.title')}</h2>

      <div className="relative w-full max-w-md mx-auto">

        {/* Казан как фон */}
        <img
          src={kazanBg}
          alt="Plov Kazan"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-30 pointer-events-none z-0"
        />

        {/* Текст в центре */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            pointerEvents: 'none',
            textAlign: 'center',
            color: '#facc15',
            fontWeight: 'bold',
            lineHeight: '1.2'
          }}
        >
          <div style={{ fontSize: '18px' }}>13,013,003,000</div>
          <div style={{ fontSize: '14px' }}>$PLOV</div>
        </div>

        {/* Круговая диаграмма */}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Легенда */}
      <div className="max-w-md mx-auto mt-6 space-y-1 text-left text-sm md:text-base">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-yellow-200">{item.name}</span>
            <span className="text-yellow-400">{item.value}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TokenomicsChart

