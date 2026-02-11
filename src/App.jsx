import { useState } from 'react'
import './App.css'
import { Scoreboard } from './Scoreboard'



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

  const hustleTotalScore = hustleEarned + otherErrors
  const otherTotalScore = otherEarned + hustleErrors

  return (
    <div className="app">

      <Scoreboard 
        hustleTotalScore={hustleTotalScore} 
        otherTotalScore={otherTotalScore}
      />

      {/* Two-column layout */}
      <div className="teams-container">

        {/* Left column - HUSTLE */}
        <div className="team-section">
          <h2>Hustle</h2>

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
              <button onClick={subtractHustleEarned}>-</button>
              <button onClick={addHustleEarned}>+</button>
            </div>
            <div className="button-group">
              <button onClick={subtractHustleErrors}>-</button>
              <button onClick={addHustleErrors}>+</button>
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
              <button onClick={subtractOtherEarned}>-</button>
              <button onClick={addOtherEarned}>+</button>
            </div>
            <div className="button-group">
              <button onClick={subtractOtherErrors}>-</button>
              <button onClick={addOtherErrors}>+</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
