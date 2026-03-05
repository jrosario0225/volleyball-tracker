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

// hook import
import { useStatTracking } from "./hooks/useStatTracking"

// StatModal import
import StatModal from './components/shared/StatModal'

// Whiteboard component
import Whiteboard from "./components/shared/Whiteboard"

function App() {

  /* STATES */

  // view state (between "stats" and "whiteboard")
  const [currentView, setCurrentView] = useState("stats")

  // importing state hook 
  const stats = useStatTracking()

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

  // for opponent team name
  const [opponentName, setOpponentName] = useState("Other Team")


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
    if (stats.hustleEarned > 0) {
      stats.subtractStat('hustle', 'earned')
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
    if (stats.hustleErrors > 0) {
      stats.subtractStat('hustle', 'error')
    }
  }

  // Other EARNED
  const addOtherEarned = () => {
    setStatModalTeam('other')
    setStatModalType('earned')
    setStatModalAction('add')
    setShowStatModal(true)
  }

  const subtractOtherEarned = () => {
    if (stats.otherEarned > 0) {
      stats.subtractStat('other', 'earned')
    }
  }

  // other ERROR
  const addOtherErrors = () => {
    setStatModalTeam('other')
    setStatModalType('error')
    setStatModalAction('add')
    setShowStatModal(true)
  }

  const subtractOtherErrors = () => {
    if (stats.otherErrors > 0) {
      stats.subtractStat('other', 'error')
    }
  }


  // functions for updating SET number and prompting Set Modal
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

  // function to RESET the score back to 0-0
  const resetScore = () => {
    stats.resetAllStats()
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


  const handleSelectStat = (statKey) => {
    stats.addStat(statModalTeam, statModalType, statKey)
    setShowStatModal(false)
    setStatModalTeam(null)
    setStatModalType(null)
  }




  /* PROPS */

  // props for Scoreboard.jsx
  const hustleTotalScore = stats.hustleEarned + stats.otherErrors
  const otherTotalScore = stats.otherEarned + stats.hustleErrors



  return (
    <div className="app">

      {/* Dashboard */}
      <div className="view-toggle">
        <button onClick={() => setCurrentView("stats")} className={currentView === "stats" ? "active" : ""}>Stats</button>
        <button onClick={() => setCurrentView("whiteboard")} className={currentView === "whiteboard" ? "active" : ""}>Whiteboard</button>
      </div>


      {currentView === "stats" && (
        <div className="stats'-view">

          {/* Scoreboard */}
          <div className="desktop-only">
            <ScoreboardDesktop
              hustleTotalScore={hustleTotalScore}
              otherTotalScore={otherTotalScore}
              currentSet={currentSet}
              opponentName={opponentName}
              setOpponentName={setOpponentName}
              hustleRun={stats.hustleRun}
              otherRun={stats.otherRun}
              hustleLongestRun={stats.hustleLongestRun}
              otherLongestRun={stats.otherLongestRun}
            />
          </div>

          <div className="mobile-only">
            <ScoreboardMobile
              hustleTotalScore={hustleTotalScore}
              otherTotalScore={otherTotalScore}
              currentSet={currentSet}
              opponentName={opponentName}
              setOpponentName={setOpponentName}
            />
          </div>

          {/*TeamSection*/}
          {/* Desktop */}
          <div className="desktop-only">
            <div className="teams-container-desktop">

              <TeamSectionDesktop
                earned={stats.hustleEarned}
                errors={stats.hustleErrors}
                earnedStats={stats.hustleEarnedStats}
                errorStats={stats.hustleErrorStats} 
                onAddEarned={addHustleEarned}
                onSubtractEarned={subtractHustleEarned}
                onAddErrors={addHustleErrors}
                onSubtractErrors={subtractHustleErrors}
              />

              <TeamSectionDesktop
                earned={stats.otherEarned}
                errors={stats.otherErrors}
                earnedStats={stats.otherEarnedStats} // displays other earned
                errorStats={stats.otherErrorStats} // displays other errors
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
                earned={stats.hustleEarned}
                errors={stats.hustleErrors}
                onAddEarned={addHustleEarned}
                onSubtractEarned={subtractHustleEarned}
                onAddErrors={addHustleErrors}
                onSubtractErrors={subtractHustleErrors}
              />

              <TeamSectionMobile
                teamName="Other Team"
                earned={stats.otherEarned}
                errors={stats.otherErrors}
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

        </div>
      )}

      {/* Putting Whiteboard ...*/}
      {currentView === "whiteboard" && (
        <Whiteboard />
      )}


      {/* setModal */}
      <SetModal
        showModal={showModal}
        pendingAction={pendingAction}
        currentSet={currentSet}
        onConfirm={confirmSetChange}
        onCancel={cancelSetChange}
      />

      <StatModal
        showStatModal={showStatModal}
        statModalType={statModalType}
        statModalTeam={statModalTeam}
        onSelectStat={handleSelectStat}
        onCancel={() => setShowStatModal(false)}
      />



    </div>
  )
}

export default App
