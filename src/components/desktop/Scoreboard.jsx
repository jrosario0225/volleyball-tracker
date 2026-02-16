import React from 'react'
import "./Scoreboard.css"

// DESKTOP Scoreboard

/* props: 
- hustleTotalScore 
- otherTotalScore
- currentSet
found in App.css */

function Scoreboard({ hustleTotalScore, otherTotalScore, currentSet }) {
    return (
        <div className="scoreboard">
            <div className="scores">
                <div className="team-name">
                    <img src="/hustle-logo.jpeg" alt="Hustle logo" className="team-logo" />
                    <p>Hustle</p>
                </div>
                <div className="score-numbers">
                    <p>{hustleTotalScore}</p>
                </div>
                <div className="score-numbers">
                    <p>{otherTotalScore}</p>
                </div>
                <div className="team-name">
                    <p>Other Team</p>
                </div>
            </div>
            <div className="set-display">
                <p>Set {currentSet}</p>
            </div>
        </div>

    )
}

export default Scoreboard;



