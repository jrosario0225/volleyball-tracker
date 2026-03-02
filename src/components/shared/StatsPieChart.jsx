import React from "react"
import { PieChart, Pie, Cell, Tooltip } from "recharts"

const statLabels = {
    /* Earned Stats */
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

    /* Error Stats */
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

const statColors = {
    // Earned - cool/varied colors
    kill: "#2ecc71",       // green
    tool: "#3498db",       // blue
    tip: "#9b59b6",        // purple
    roll: "#1abc9c",       // teal
    block: "#00cec9",      // cyan
    overpassKill: "#6c5ce7", // indigo
    joust: "#0984e3",      // bright blue
    ace: "#00b894",        // mint
    setterDump: "#55efc4", // light teal
    ballOver: "#74b9ff",   // sky blue

    // Errors - warm/varied colors
    serveError: "#e74c3c",   // red
    attackError: "#e67e22",  // orange
    shank: "#f1c40f",        // yellow
    lift: "#d63031",         // dark red
    doubleTouch: "#fd79a8",  // pink
    fourTouches: "#e17055",  // salmon
    rotation: "#fdcb6e",     // gold
    antenna: "#ff7675",      // light red
    centerLineFault: "#a29bfe", // lavender (stands out)
    netTouch: "#fab1a0",     // peach
    setError: "#d35400",     // burnt orange
    freeBallOut: "#c0392b",  // crimson
    freeBallDrop: "#e84393"  // hot pink
}


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
            value: Math.round((value / total) * 100),
            color: statColors[key]
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
                        <Cell key={index} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
        </div>
    )

}



export default StatsPieChart