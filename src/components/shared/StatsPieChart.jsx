import React from "react"
import { PieChart, Pie, Cell, Tooltip } from "recharts"

const statLabels = {
    kill: "Kill",
    tool: "Tool",
    tip: "Tip",
    roll: "Roll",
    block: "Block",
    overpassKill: "OP Kill",
    joust: "Joust",
    ace: "Ace",
    setterDump: "S.Dump",
    ballOver: "Ball Over",

    serveError: "Serve",
    attackError: "Attack",
    shank: "Shank",
    lift: "Lift",
    doubleTouch: "D.Touch",
    fourTouches: "4Touch",
    rotation: "Rotation",
    antenna: "Antenna",
    centerLineFault: "Center Line",
    netTouch: "Net Touch",
    setError: "Set Error",
    freeBallOut: "FB Out",
    freeBallDrop: "FB Drop"

}

const COLORS = [
    "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e67e22",
    "#1abc9c", "#e74c3c", "#2980b9", "#8e44ad", "#27ae60"
]


const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, value, name }) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius + 20
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={8}>
            {`${name}: ${value}%`}
        </text>
    )
}


function StatsPieChart({ earnedStats, errorStats }) {
    const stats = earnedStats || errorStats
    const total = Object.values(stats).reduce((sum, val) => sum + val, 0)

    // this function is cool
    const data = Object.entries(stats)
        .filter(([key, value]) => value > 0)
        .map(([key, value]) => ({
            name: statLabels[key],
            value: Math.round((value / total) * 100)
        }))


    return (

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PieChart width={300} height={250}>

                <Pie
                    data={data}
                    cx={150}
                    cy={100}
                    innerRadius={35}
                    outerRadius={55}
                    dataKey="value"
                    label={renderCustomLabel}
                    labelLine={true}
                    >
                    
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
        </div>
    )

}



export default StatsPieChart