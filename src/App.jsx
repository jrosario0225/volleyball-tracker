import { useState } from 'react'
import './App.css'

// DESKTOP component imports
import ScoreboardDesktop from './components/desktop/Scoreboard'
import TeamSectionDesktop from './components/desktop/TeamSection'

// MOBILE component imports
import ScoreboardMobile from './components/mobile/Scoreboard'
import TeamSectionMobile from "./components/mobile/TeamSection"

// SHARED component import
import SetModal from "./components/shared/SetModal"

function App() {

  /* STATES */

  // for Hustle's earned points and errors
  const [hustleEarned, setHustleEarned] = useState(0)
  const [hustleErrors, setHustleErrors] = useState(0)

  // Detailed stats for Hustle
  const [hustleEarnedStats, setHustleEarnedStats] = useState({
    kill: 0,
    roll: 0,
    tip: 0,
    tool: 0,
    block: 0,
    overpassKill: 0,
    ace: 0,
    setterDump: 0
  })

  const [hustleErrorStats, setHustleErrorStats] = useState({
    serveError: 0,
    attackError: 0,
    shank: 0,
    doubleTouch: 0,
    antenna: 0,
    lineFault: 0,
    netTouch: 0
  })


  // for other team's earned points and errors
  const [otherEarned, setOtherEarned] = useState(0)
  const [otherErrors, setOtherErrors] = useState(0)

  // Detailed stats for Other Team
   const [otherEarnedStats, setOtherEarnedStats] = useState({
    kill: 0,
    roll: 0,
    tip: 0,
    tool: 0,
    block: 0,
    overpassKill: 0,
    ace: 0,
    setterDump: 0
  })

  const [otherErrorStats, setOtherErrorStats] = useState({
    serveError: 0,
    attackError: 0,
    shank: 0,
    doubleTouch: 0,
    antenna: 0,
    lineFault: 0,
    netTouch: 0
  })




  // for updating Set #
  const [currentSet, setCurrentSet] = useState(1)

  // for set tracking and modal
  const [showModal, setShowModal] = useState(false)
  const [pendingAction, setPendingAction] = useState(null) // "prev" or "next"

  // for stat selection modal
  const [showStatModal, setShowStatModal] = useState(false)
  const [statModalType, setStatModalType] = useState(null) // "earned" or "error"
  const [statModalTeam, setStatModalTeam] = useState(null) // "hustle" or "other"
  const [statModalAction, setStatModalAction] = useState(null) // "add" or "subtact"



  /* FUNCTIONS */

  // All functions to update points earned and errors for specific teams
  // Hustle EARNED
  const addHustleEarned = () => {
    setStatModalTeam('hustle')
    setStatModalType('earned')
    setStatModalAction('add')
    setShowStatModal(true)
  }

  const subtractHustleEarned = () => {
    if (hustleEarned > 0) {
      setStatModalTeam('hustle')
      setStatModalType('earned')
      setStatModalAction('subtract')
      setShowStatModal(true)
    }
  }

  // Hustle ERRORS
  const addHustleErrors = () => {
    setStatModalTeam('hustle')
    setStatModalType('error')
    setStatModalAction('add')
    setShowStatModal(true)
  }

  const subtractHustleErrors = () => {
    if (hustleErrors > 0) {
      setStatModalTeam('hustle')
      setStatModalType('error')
      setStatModalAction('subtract')
      setShowStatModal(true)
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

  // function to reset the score back to 0-0
  const resetScore = () => {
    setHustleEarned(0)
    setHustleErrors(0)
    setOtherEarned(0)
    setOtherErrors(0)
  }


  // functions to confirm or cancel Set change (move onto the next set?)
  const confirmSetChange = () => {
    if (pendingAction === "next") {
      // Move to the next set
      setCurrentSet(currentSet + 1)

      //Reset scores to 0-0
      resetScore()
    }

    else if (pendingAction === "prev") {
      if (currentSet > 1) {
        setCurrentSet(currentSet - 1)
      }

      //Reset scores to 0-0
      resetScore()
    }
    setShowModal(false)
    setPendingAction(null)
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
        {currentSet === 1 ? <></> : <button onClick={prevSet}>Previous Set</button>}
        <button onClick={nextSet}>Next Set</button>
      </div>

      {/* setModal */}

      <SetModal
        showModal={showModal}
        pendingAction={pendingAction}
        currentSet={currentSet}
        onConfirm={confirmSetChange}
        onCancel={cancelSetChange}
      />
    </div >




  )
}

export default App
