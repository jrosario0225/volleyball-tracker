import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

function EffectivePieChart({earned, errors}) {
    const total = earned + errors
    
    const data = [
        { name: "Points Earned", value: total === 0 ? 0 : Math.round((earned / total) * 100)},
        { name: "Errors Made", value: total === 0 ? 0 : Math.round((errors / total) * 100)}
    ]

    const COLORS = ["#2ecc71", "#e74c3c"]

    // adding labels to pie chart

    const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, value, name }) => {
        const RADIAN = Math.PI / 180
        const radius = outerRadius + 40
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={10}>
                {`${name}: ${value}%`}
            </text>
        )
    }

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{ alignSelf: "center", marginBottom: "0"}}>Effectiveness</h3>
            <PieChart width={500} height={300}>
                <Pie
                data={data}
                cx={250}
                cy={140}
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                label={renderCustomLabel}
                labelLine={true}
                >

                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
        </div>
    )
}

export default EffectivePieChart;