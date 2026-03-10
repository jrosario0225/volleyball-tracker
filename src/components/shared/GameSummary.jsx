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
                                    <td style={{ color: hustleWon ? "#2ecc71" : "#e74c3c"}}>{hustleScore}</td>
                                    <td style={{ color: hustleWon ? "#e74c3c" : "#2ecc71"}}>{otherScore}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>

            </div>

            <h3>Hustle OVERALL Effectiveness</h3>
            <EffectivePieChart
                earned={totalHustleEarned}
                errors={totalHustleErrors} />
        </div>
    )
}

export default GameSummary;