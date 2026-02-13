import { useState } from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'

function App() {

  // for Hustle's earned points and errors
  const [hustleEarned, setHustleEarned] = useState(0)
  const [hustleErrors, setHustleErrors] = useState(0)
  // for other team's earned points and errors
  const [otherEarned, setOtherEarned] = useState(0)
  const [otherErrors, setOtherErrors] = useState(0)


  // All functions to update points earned and errors

  // Hustle EARNED
  const addHustleEarned = () => {
    setHustleEarned(hustleEarned + 1)
  }

  const subtractHustleEarned = () => {
    setHustleEarned(hustleEarned - 1)
  }

  // Hustle ERRORS
  const addHustleErrors = () => {
    setHustleErrors(hustleErrors + 1)
  }

  const subtractHustleErrors = () => {
    setHustleErrors(hustleErrors - 1)
  }

  // Other EARNED
  const addOtherEarned = () => {
    setOtherEarned(otherEarned + 1)
  }

  const subtractOtherEarned = () => {
    setOtherEarned(otherEarned - 1)
  }

  // other ERROR
  const addOtherErrors = () => {
    setOtherErrors(otherErrors + 1)
  }

  const subtractOtherErrors = () => {
    setOtherErrors(otherErrors - 1)
  }

// props for Scoreboard.jsx
const hustleTotalScore = hustleEarned + otherErrors
const otherTotalScore = otherEarned + hustleErrors

  return (
    <div className="app">

      {/* Scoreboard at top */}
      {/* <div className="scoreboard">
        <div className="scores">
          <div className="team-score">
            <img src="/hustle-logo.jpeg" alt="Hustle logo" className="team-logo" />
            <p>Hustle: {hustleEarned + otherErrors}</p>
          </div>
          <div className="team-score">
            <p>{otherEarned + hustleErrors}: Other Team</p>
          </div>
        </div>
      </div> */}

      <Scoreboard
      hustleTotalScore={hustleTotalScore}
      otherTotalScore={otherTotalScore} 
      />

      {/* Two-column layout */}
      <div className="teams-container">

        {/* Left column - HUSTLE */}
        <div className="team-section">
          <div className="team-stat-name">
            <img src="/hustle-logo.jpeg" alt="Hustle logo" className="team-logo" />
            <h2>Hustle</h2>
          </div>

          {/* Putting Earned + Error side-by-side */}
          <div className="stats-row">
            <div className="stat-item">
              <p>Hustle Earned: {hustleEarned} </p>
            </div>
            <div className="stat-item">
              <p>Hustle Errors: {hustleErrors} </p>
            </div>
          </div>

          <div className="buttons-row">
            <div className="button-group">
              <button onClick={subtractHustleEarned} className="button-subtract">-</button>
              <button onClick={addHustleEarned} className="button-add">+</button>
            </div>
            <div className="button-group">
              <button onClick={subtractHustleErrors} className="button-subtract">-</button>
              <button onClick={addHustleErrors} className="button-add">+</button>
            </div>
          </div>
        </div>

        {/* Right Column - OTHER TEAM */}
        <div className="team-section">
          <h2>Other Team</h2>

          <div className="stats-row">
            <div className="stat-item">
              <p>Other Earned: {otherEarned} </p>
            </div>
            <div className="stat-item">
              <p>Other Errors: {otherErrors} </p>
            </div>
          </div>

          <div className="buttons-row">
            <div className="button-group">
              <button onClick={subtractOtherEarned} className="button-subtract">-</button>
              <button onClick={addOtherEarned} className="button-add">+</button>
            </div>
            <div className="button-group">
              <button onClick={subtractOtherErrors} className="button-subtract">-</button>
              <button onClick={addOtherErrors} className="button-add">+</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
