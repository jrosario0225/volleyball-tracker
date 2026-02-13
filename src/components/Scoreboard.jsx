import React, { useState } from "react";
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




/* 
The goal here is to figure out props and create
components for everything
*/


