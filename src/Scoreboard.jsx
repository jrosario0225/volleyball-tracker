import { useState } from 'react'
import './App.css'

export function Scoreboard({hustleTotalScore, otherTotalScore}) {
    return (
        <div className="scoreboard">
          <div className="team-name">Hustle</div>
          <div className="total-score">{hustleTotalScore}</div>
          <div className="total-score">{otherTotalScore}</div>
          <div className="team-name">Other</div>
      </div>
    )
}

