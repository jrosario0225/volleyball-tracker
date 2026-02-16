import React from 'react'
import "./Scoreboard.css"

/* props are hustleTotalScore and otherTotalScore
found in App.css */

function Scoreboard({hustleTotalScore, otherTotalScore}) {
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
        </div>

    )
}

export default Scoreboard;



