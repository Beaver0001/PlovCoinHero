import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'

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
    <section className="py-20 px-6 bg-[#1a0a05] text-yellow-100 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('tokenomics.title')}</h2>

      <div className="w-full max-w-xl mx-auto">
        <ResponsiveContainer width="100%" height={360}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              labelLine={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default TokenomicsChart
