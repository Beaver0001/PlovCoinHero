import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import kazanImage from "../assets/kazan-bg.png"

const data = [
  { name: "🥘 Community & Airdrops", value: 38 },
  { name: "🧄 Liquidity", value: 22 },
  { name: "🔥 Marketing", value: 13 },
  { name: "🍚 DAO / Treasury", value: 10 },
  { name: "👨‍🍳 Команда", value: 10 },
  { name: "🎁 Резерв", value: 7 }
]

const COLORS = ["#facc15", "#f97316", "#ef4444", "#10b981", "#6366f1", "#eab308"]

function TokenomicsBlock() {
  return (
    <section className="relative bg-[#1a0a05] text-yellow-100 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Tokenomics</h2>

      <div className="relative max-w-2xl mx-auto">
        <img
          src={kazanImage}
          alt="Kazan background"
          className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none z-0"
        />
        <div className="relative z-10">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={110}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 text-sm text-yellow-300 max-w-xl mx-auto leading-relaxed">
        Total Supply: 13 013 003 000 $PLOV<br />
        Mint Address: Edo7P6PigSTgKB1Nn3bfeTuadudrefgkSdCT5jc6jWTh<br />
        Mint authority: отключена для доверия — казан запечатан!
      </div>
    </section>
  )
}

export default TokenomicsBlock
