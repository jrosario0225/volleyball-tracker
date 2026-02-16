import React from "react";
import "./Scoreboard.css";


// MOBILE Scoreboard

function Scoreboard({ hustleTotalScore, otherTotalScore, currentSet }) {
    return (
        <div className="scoreboard-mobile">
            <div className="score-row">
                <div className="team-name-mobile">
                    <img src="/hustle-logo.jpeg" alt="Hustle logo" className="team-logo-mobile" />
                    <p>Hustle</p>
                </div>
                <p className="score-number-mobile">{hustleTotalScore}</p>
            </div>

            <div className="score-row">
                <div className="team-name-mobile">
                    <p>Other Team</p>
                </div>
                <p className="score-number-mobile">{otherTotalScore}</p>
            </div>

            <div className="set-display-mobile">
                <p> Set {currentSet} </p>
            </div>
        </div>

    )

}

export default Scoreboard