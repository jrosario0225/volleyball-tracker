import React from 'react';
import EffectivePieChart from './EffectivePieChart';


function GameSummary({ savedSets, opponentName }) {

    if (savedSets.length === 0) {
        return (
            <div className="game-summary">
                <h2>Game Summary</h2>
                <p>no sets have been completed yet</p>
            </div>
        )
    }

    return (
        <div className="game-summary">
            <h2>Game Summary</h2>


            <div className="set-scores">
                {savedSets.map((set) => {
                    const hustleScore = Object.values(set.hustleEarnedStats).reduce((sum, val) => sum + val, 0)
                    + Object.values(set.otherErrorStats).reduce((sum, val) => sum + val, 0)

                    const otherScore = Object.values(set.otherEarnedStats).reduce((sum, val) => sum + val, 0)
                    + Object.values(set.hustleErrorStats).reduce((sum, val) => sum + val, 0)

                    return (
                        <div key={set.setNumber} className="set-score-row"> 
                            <span>Set {set.setNumber} </span>
                            <span>Hustle {hustleScore} </span>
                            <span> - </span>
                            <span>{otherScore} {opponentName} </span>
                        </div>
                     
                    )
                })}
            </div>
        </div>
    )
}

export default GameSummary;