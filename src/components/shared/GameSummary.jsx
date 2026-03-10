import React from 'react';
import EffectivePieChart from './EffectivePieChart';
import StatsPieChart from './StatsPieChart';
import "./GameSummary.css"


function GameSummary({ savedSets, opponentName }) {

    if (savedSets.length === 0) {
        return (
            <div className="game-summary">
                <h2>Game Summary</h2>
                <p>no sets have been completed yet</p>
            </div>
        )
    }


    // Values for ALL sets
    const totalHustleEarned = savedSets.reduce((sum, set) =>
        sum + Object.values(set.hustleEarnedStats).reduce((sum, val) => sum + val, 0), 0)

    const totalHustleErrors = savedSets.reduce((sum, set) =>
        sum + Object.values(set.hustleErrorStats).reduce((sum, val) => sum + val, 0), 0)

    // Combined Hustle Specific Stats
    const combinedHustleEarnedStats = savedSets.reduce((combined, set) => {
        Object.keys(set.hustleEarnedStats).forEach(key => {
            combined[key] = (combined[key] || 0) + set.hustleEarnedStats[key]
        })
        return combined
    }, {})

    const combinedHustleErrorStats = savedSets.reduce((combined, set) => {
        Object.keys(set.hustleErrorStats).forEach(key => {
            combined[key] = (combined[key] || 0) + set.hustleErrorStats[key]
        }, {})
        return combined
    }, {})


    return (
        <div className="game-summary">
            <h2>Game Summary</h2>


            <div className="set-scores">
                <table className="summary-table">
                    <thead>
                        <tr>
                            <th>Set</th>
                            <th>Hustle</th>
                            <th>{opponentName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedSets.map((set) => {
                            const hustleScore = Object.values(set.hustleEarnedStats).reduce((sum, val) => sum + val, 0)
                                + Object.values(set.otherErrorStats).reduce((sum, val) => sum + val, 0)

                            const otherScore = Object.values(set.otherEarnedStats).reduce((sum, val) => sum + val, 0)
                                + Object.values(set.hustleErrorStats).reduce((sum, val) => sum + val, 0)

                            const hustleWon = hustleScore > otherScore

                            return (
                                <tr key={set.setNumber} >
                                    <td>Set {set.setNumber} </td>
                                    <td style={{ color: hustleWon ? "#2ecc71" : "#e74c3c" }}>{hustleScore}</td>
                                    <td style={{ color: hustleWon ? "#e74c3c" : "#2ecc71" }}>{otherScore}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>

            </div>

            <div className="summary-piecharts">
                <div className="summary-effective-piechart">
                    <h3>Hustle Game Effectiveness</h3>
                    <EffectivePieChart
                        earned={totalHustleEarned}
                        errors={totalHustleErrors} />
                </div>

                <div className="summary-stats">
                    <h3> Hustle Game Stats </h3>
                    <div className="overall-stats-piechart">
                        <StatsPieChart earnedStats={combinedHustleEarnedStats} />
                        <StatsPieChart errorStats={combinedHustleErrorStats} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSummary;