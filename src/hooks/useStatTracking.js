import { useState } from "react";

export function useStatTracking() {

    /* Detailed stats for Hustle */
    // Specific EARNED stats for Hustle
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

    // Specific ERROR stats for Hustle
    const [hustleErrorStats, setHustleErrorStats] = useState({
        serveError: 0,
        attackError: 0,
        shank: 0,
        doubleTouch: 0,
        antenna: 0,
        lineFault: 0,
        netTouch: 0
    })

    // Stat HISTORY for Hustle
    const [hustleEarnedHistory, setHustleEarnedHistory] = useState([])
    const [hustleErrorHistory, setHustleErrorHistory] = useState([])


    /* Detailed stats for Other */
    // Specific EARNED stat for Other
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

    // Specific ERROR stats for Other
    const [otherErrorStats, setOtherErrorStats] = useState({
        serveError: 0,
        attackError: 0,
        shank: 0,
        doubleTouch: 0,
        antenna: 0,
        lineFault: 0,
        netTouch: 0
    })

    // Stat HISTORY for Other
    const [otherEarnedHistory, setOtherEarnedHistory] = useState([])
    const [otherErrorHistory, setOtherErrorHistory] = useState([])


    /* Calculating totals from detailed stats */
    const hustleEarned = Object.values(hustleEarnedStats).reduce((sum, val) => sum + val, 0)
    const hustleErrors = Object.values(hustleErrorStats).reduce((sum, val) => sum + val, 0)
    const otherEarned = Object.values(otherEarnedStats).reduce((sum, val) => sum + val, 0)
    const otherErrors = Object.values(otherErrorStats).reduce((sum, val) => sum + val, 0)


    /* Function to add a stat */
    const addStat = (team, type, statKey) => {
        if (team === "hustle" && type === "earned") {
            setHustleEarnedStats(prev => ({...prev, [statKey]: prev[statKey] + 1}))
            setHustleEarnedHistory(prev => ([...prev, statKey]))
        }
        else if (team === "hustle" && type === "error") {
            setHustleErrorStats(prev => ({...prev, [statKey]: prev[statKey] + 1}))
            setHustleErrorHistory(prev => ([...prev, statKey]))
        }
        else if (team === "other" && type === "earned") {
            setOtherEarnedStats(prev => ({...prev, [statKey]: prev[statKey] + 1}))
            setOtherEarnedHistory(prev => ([...prev, statKey]))
        }
        else if (team === "other" && type === "error") {
            setOtherErrorStats(prev => ({...prev, [statKey]: prev[statKey] + 1}))
            setOtherErrorHistory(prev => ([...prev, statKey]))
        }

    }


    return {

    }
} 