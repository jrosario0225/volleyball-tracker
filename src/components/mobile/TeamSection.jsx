import React from "react";
import "./TeamSection.css";


function TeamSection({ teamName,
    earned,
    errors,
    onAddEarned,
    onSubtractEarned,
    onAddErrors,
    onSubtractErrors
}) {
    return (
        <div className="team-section-mobile">
            <div className="team-name-mobile">
                <h2>{teamName}</h2>
            </div>
            <div className="stat-row-mobile">
                <p className="stat-label">✅ Earned</p>
                <p className="stat-number">{earned}</p>
                <div className="button-group-mobile">
                    <button onClick={onSubtractEarned} className="button-subtract">-</button>
                    <button onClick={onAddEarned} className="button-add">+</button>
                </div>
            </div>

            <div className="stat-row-mobile">
                <p className="stat-label">❌ Errors</p>
                <p className="stat-number">{errors}</p>
                <div className="button-group-mobile">
                    <button onClick={onSubtractErrors} className="button-subtract">-</button>
                    <button onClick={onAddErrors} className="button-add">+</button>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;