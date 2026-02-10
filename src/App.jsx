import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  // for Hustle's earned points and errors
  const [hustleEarned, setHustleEarned] = useState(0)
  const [hustleErrors, setHustleErrors] = useState(0)
  // for other team's earned points and errors
  const [otherEarned, setOtherEarned] = useState(0)
  const [otherErrors, setOtherErrors] = useState(0)


  return(
    <div>
      <h1> Volleyball Tracker </h1>
      <p>Hustle Earned: {hustleEarned} </p>
      <p>Hustle Errors: {hustleErrors} </p>
      <p>Other Earned: {otherEarned} </p>
      <p>Other Errors: {otherErrors} </p>
    </div>
  )
}

export default App
