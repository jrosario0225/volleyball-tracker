import React from "react";
import "./TeamSection.css";


function TeamSection({teamName, 
    earned, 
    errors,
    onAddEarned,
    onSubtractEarned,
    onAddErrors,
    onSubtractErrors
}) {
    return(
        <div className="team-section-mobile">
            <div className="team-name-mobile">
                <h2>{teamName}</h2>
            </div>
            <div className="stat-row-mobile">
                <p>Earned</p>
                <p>{earned}</p>
                <button onClick={onSubtractEarned} className="button-subtract">-</button>
                <button onClick={onAddEarned} className="button-add">+</button>
            </div>

            <div className="stat-row-mobile">
                <p>Errors</p>
                <p>{errors}</p>
                <button onClick={onSubtractErrors} className="button-subtract">-</button>
                <button onClick={onAddErrors} className="button-add">+</button>
            </div>
        </div>
    )
}

export default TeamSection;