import React from 'react';
import "./TeamSection.css";


// DESKTOP TeamSection


function TeamSection({ earned, errors,
    onAddEarned, onSubtractEarned,
    onAddErrors, onSubtractErrors
}) {
    return (
        <div className="team-section">
            <div className="stat">
                <div className="stat-item">
                    <p>✅ Points earned: {earned}</p>
                </div>
                <div className="stat-item">
                    <p>❌ Errors made: {errors}</p>
                </div>
            </div>

            <div className="stat-buttons">
                <div className="button-group">
                    <button onClick={onSubtractEarned} className="button-subtract">-</button>
                    <button onClick={onAddEarned} className="button-add">+</button>
                </div>
                <div className="button-group">
                    <button onClick={onSubtractErrors} className="button-subtract">-</button>
                    <button onClick={onAddErrors} className="button-add">+</button>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;