import { useState } from 'react'
import './App.css'

// DESKTOP component imports
import ScoreboardDesktop from './components/desktop/Scoreboard'
import TeamSectionDesktop from './components/desktop/TeamSection'

// MOBILE component imports
import ScoreboardMobile from './components/mobile/Scoreboard'
import TeamSectionMobile from "./components/mobile/TeamSection"

function App() {

  /* STATES */

  // for Hustle's earned points and errors
  const [hustleEarned, setHustleEarned] = useState(0)
  const [hustleErrors, setHustleErrors] = useState(0)
  // for other team's earned points and errors
  const [otherEarned, setOtherEarned] = useState(0)
  const [otherErrors, setOtherErrors] = useState(0)

  
  // for updating Set #
  const [currentSet, setCurrentSet] = useState(1)

  // for set tracking and modal
  const [setHistory, setSetHistory] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [pendingAction, setPendingAction] = useState(null) // "prev" or "next"


  /* FUNCTIONS */

  // All functions to update points earned and errors for specific teams
  // Hustle EARNED
  const addHustleEarned = () => {
    setHustleEarned(hustleEarned + 1)
  }

  const subtractHustleEarned = () => {
    if (hustleEarned > 0) {
      setHustleEarned(hustleEarned - 1)
    }
  }

  // Hustle ERRORS
  const addHustleErrors = () => {
    setHustleErrors(hustleErrors + 1)
  }

  const subtractHustleErrors = () => {
    if (hustleErrors > 0) {
      setHustleErrors(hustleErrors - 1)
    }
  }

  // Other EARNED
  const addOtherEarned = () => {
    setOtherEarned(otherEarned + 1)
  }

  const subtractOtherEarned = () => {
    if (otherEarned > 0) {
      setOtherEarned(otherEarned - 1)
    }
  }

  // other ERROR
  const addOtherErrors = () => {
    setOtherErrors(otherErrors + 1)
  }

  const subtractOtherErrors = () => {
    if (otherErrors > 0) {
      setOtherErrors(otherErrors - 1)
    }
  }


  // functions for updating Set number and prompting Set Modal
  const nextSet = () => {
    setPendingAction('next')
    setShowModal(true)
  }

  const prevSet = () => {
    if (currentSet > 1) {
      setPendingAction('prev')
      setShowModal(true)
    }
  }


  // functions to confirm or cancel Set change (move onto the next set?)
  const confirmSetChange = () => {
      // this is left blank intentionally 
  }

  const cancelSetChange = () => {
    setShowModal(false)
    setPendingAction(null)
  }

  /* PROPS */

  // props for Scoreboard.jsx
  const hustleTotalScore = hustleEarned + otherErrors
  const otherTotalScore = otherEarned + hustleErrors





  return (
    <div className="app">

      {/* Displaying Scoreboard */}
      <div className="desktop-only">
        <ScoreboardDesktop
          hustleTotalScore={hustleTotalScore}
          otherTotalScore={otherTotalScore}
          currentSet={currentSet}
        />
      </div>

      <div className="mobile-only">
        <ScoreboardMobile
          hustleTotalScore={hustleTotalScore}
          otherTotalScore={otherTotalScore}
          currentSet={currentSet} />
      </div>

      {/* Displaying TeamSection*/}

      {/* Desktop */}
      <div className="desktop-only">
        <div className="teams-container-desktop">

          <TeamSectionDesktop
            earned={hustleEarned}
            errors={hustleErrors}
            onAddEarned={addHustleEarned}
            onSubtractEarned={subtractHustleEarned}
            onAddErrors={addHustleErrors}
            onSubtractErrors={subtractHustleErrors} />

          <TeamSectionDesktop
            earned={otherEarned}
            errors={otherErrors}
            onAddEarned={addOtherEarned}
            onSubtractEarned={subtractOtherEarned}
            onAddErrors={addOtherErrors}
            onSubtractErrors={subtractOtherErrors}
          />
        </div>

      </div>

      {/* Mobile */}
      <div className="mobile-only">
        <div className="teams-container-mobile">

          <TeamSectionMobile
            teamName="Hustle"
            earned={hustleEarned}
            errors={hustleErrors}
            onAddEarned={addHustleEarned}
            onSubtractEarned={subtractHustleEarned}
            onAddErrors={addHustleErrors}
            onSubtractErrors={subtractHustleErrors}
          />

          <TeamSectionMobile
            teamName="Other Team"
            earned={otherEarned}
            errors={otherErrors}
            onAddEarned={addOtherEarned}
            onSubtractEarned={subtractOtherEarned}
            onAddErrors={addOtherErrors}
            onSubtractErrors={subtractOtherErrors}
          />

        </div>
      </div>
      <div className="set-controls">
        <button onClick={prevSet}>Previous Set</button>
        <button onClick={nextSet}>Next Set</button>
      </div>

    </div >




  )
}

export default App
