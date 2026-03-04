import React from 'react'
import { useState } from "react"
import "./Scoreboard.css"

// DESKTOP Scoreboard

/* props: 
- hustleTotalScore 
- otherTotalScore
- currentSet
found in App.css */

function Scoreboard({ hustleTotalScore, otherTotalScore, currentSet,
    opponentName, setOpponentName,
    hustleRun, otherRun, hustleLongestRun, otherLongestRun
 }) {

    const [isEditing, setIsEditing] = useState(false)
    const [tempName, setTempName] = useState("")

    const handleConfirm = () => {
        if (tempName.trim()) setOpponentName(tempName.trim())
        setIsEditing(false)
    }

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
                   {isEditing ? (
                    <input
                    type = "text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onBlur={() => setIsEditing(false)}
                    onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
                    autoFocus
                    className="team-name-input"
                    />

                   ): (
                    <p onClick={() => {setIsEditing(true); setTempName("")}} style={{ cursor: "pointer" }}>
                        {opponentName}
                    </p>
                   )}
                </div>
                
            </div>
            <div className="set-display">
                <p>Set: {currentSet}</p>
            </div>

            <div className="run-display">
                <div className="hustle-run-display">
                    <p>Current: {hustleRun}</p>
                    <p>Longest: {hustleLongestRun}</p>
                </div>
                <div className="other-run-display">
                   <p>Current: {otherRun}</p>
                   <p>Longest: {otherLongestRun}</p>
                </div>
            </div>

        </div>

    )
}

export default Scoreboard;



