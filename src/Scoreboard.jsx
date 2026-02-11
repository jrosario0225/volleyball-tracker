import { useState } from 'react'
import './App.css'

export function Scoreboard({hustleTotalScore, otherTotalScore}) {
    return (
        <div className="scoreboard">
            <div className="team-name justify-right">
                <img src="/hustle-logo.jpeg" alt="Hustle logo" className="team-logo" />
                <p>Hustle</p>
            </div>
            <div className="total-score">
                <p>{hustleTotalScore}</p>
            </div>
            <div className="total-score">
                <p>{otherTotalScore}</p>
            </div>
            <div className="team-name justify-left">
                <p>Other</p>
            </div>
      </div>
    )
}

