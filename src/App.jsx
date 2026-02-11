import { useState } from 'react'
import './App.css'



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



  return (
    <div className="app">

      {/* Scoreboard at top */}
      <div className="scoreboard">
        <h1> Volleyball Tracker </h1>
        <div className="scores">
          <h2>Score</h2>
          <p>Hustle: {hustleEarned + otherErrors}</p>
          <p>Other Team: {otherEarned + hustleErrors}</p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="teams-container">

        {/* Left column - HUSTLE */}
        <div className="team-section">
          <h2>Hustle</h2>
          <p>Hustle Earned: {hustleEarned} </p>
          <button onClick={addHustleEarned}>+</button>
          <button onClick={subtractHustleEarned}>-</button>

          <p>Hustle Errors: {hustleErrors} </p>
          <button onClick={addHustleErrors}>+</button>
          <button onClick={subtractHustleErrors}>-</button>
        </div>

        {/* Right Column - OTHER TEAM */}
        <div className="team-section">
        <h2>Other Team</h2>
        <p>Other Earned: {otherEarned} </p>
        <button onClick={addOtherEarned}>+</button>
        <button onClick={subtractOtherEarned}>-</button>

        <p>Other Errors: {otherErrors} </p>
        <button onClick={addOtherErrors}>+</button>
        <button onClick={subtractOtherErrors}>-</button>
      </div>
      </div>
    </div>
  )
}

export default App
