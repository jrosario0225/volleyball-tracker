import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

function EffectivePieChart({earned, errors}) {
    const total = earned + errors
    
    const data = [
        { name: "Points Earned", value: total === 0 ? 0 : Math.round((earned / total) * 100)},
        { name: "Errors Made", value: total === 0 ? 0 : Math.round((errors / total) * 100)}
    ]

    const COLORS = ["#2ecc71", "#e74c3c"]

    return (
        <div className="pie-chart-container">
            <PieChart width={220} height={220}>
                <Pie
                data={data}
                cx={105}
                cy={100}
                innerRadius={55}
                outerRadius={80}
                dataKey="value"
                >

                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
            </PieChart>
        </div>
    )
}

export default EffectivePieChart;