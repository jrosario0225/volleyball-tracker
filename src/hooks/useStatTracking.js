import { useState } from "react";

export function useStatTracking() {

    /* Detailed stats for Hustle */
    // Specific EARNED stats for Hustle
    const [hustleEarnedStats, setHustleEarnedStats] = useState({
        crossKill: 0,
        lineKill: 0,
        tool: 0,
        tipOrRoll: 0,
        block: 0,
        overpassKill: 0,
        joust: 0,
        ace: 0,
        setterDump: 0,
        ballOver: 0,
    })

    // Specific ERROR stats for Hustle
    const [hustleErrorStats, setHustleErrorStats] = useState({
        serveError: 0,
        attackError: 0,
        shank: 0,
        doubleTouch: 0,
        fourTouches: 0,
        rotation: 0,
        antenna: 0,
        centerLineFault: 0,
        netTouch: 0,
        setError: 0,
        freeBallOut: 0,
        freeBallDrop: 0
    })

    // Stat HISTORY for Hustle
    const [hustleEarnedHistory, setHustleEarnedHistory] = useState([])
    const [hustleErrorHistory, setHustleErrorHistory] = useState([])


    /* Detailed stats for Other */
    // Specific EARNED stat for Other
    const [otherEarnedStats, setOtherEarnedStats] = useState({
        crossKill: 0,
        lineKill: 0,
        tool: 0,
        tipOrRoll: 0,
        block: 0,
        overpassKill: 0,
        joust: 0,
        ace: 0,
        setterDump: 0,
        ballOver: 0,
    })

    // Specific ERROR stats for Other
    const [otherErrorStats, setOtherErrorStats] = useState({
        serveError: 0,
        attackError: 0,
        shank: 0,
        doubleTouch: 0,
        fourTouches: 0,
        rotation: 0,
        antenna: 0,
        centerLineFault: 0,
        netTouch: 0,
        setError: 0,
        freeBallOut: 0,
        freeBallDrop: 0
    })

    // Stat HISTORY for Other
    const [otherEarnedHistory, setOtherEarnedHistory] = useState([])
    const [otherErrorHistory, setOtherErrorHistory] = useState([])


    /* Calculating totals from detailed stats */
    const hustleEarned = Object.values(hustleEarnedStats).reduce((sum, val) => sum + val, 0)
    const hustleErrors = Object.values(hustleErrorStats).reduce((sum, val) => sum + val, 0)
    const otherEarned = Object.values(otherEarnedStats).reduce((sum, val) => sum + val, 0)
    const otherErrors = Object.values(otherErrorStats).reduce((sum, val) => sum + val, 0)


    /* Function to ADD a stat */
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

    /* Function to SUBTRACT the most recent stat */
    const subtractStat = (team, type) => {
        if (team === "hustle" && type === "earned" && hustleEarnedHistory.length > 0) {
            const lastStat = hustleEarnedHistory[hustleEarnedHistory.length - 1]
            setHustleEarnedStats(prev => ({...prev, [lastStat]: prev[lastStat] - 1}))
            setHustleEarnedHistory(prev => prev.slice(0, -1)) 
        }
        else if (team === "hustle" && type === "error" && hustleErrorHistory.length > 0) {
            const lastStat = hustleErrorHistory[hustleErrorHistory.length - 1]
            setHustleErrorStats(prev => ({...prev, [lastStat]: prev[lastStat] - 1}))
            setHustleErrorHistory(prev => prev.slice(0, -1))
        }
        else if (team === "other" && type === "earned" && otherEarnedHistory.length > 0) {
            const lastStat = otherEarnedHistory[otherEarnedHistory.length - 1]
            setOtherEarnedStats(prev => ({...prev, [lastStat]: prev[lastStat] - 1}))
            setOtherEarnedHistory(prev => prev.slice(0, -1))
        }
        else if (team === "other" && type === "error" && otherErrorHistory.length > 0) {
            const lastStat = otherErrorHistory[otherErrorHistory.length - 1]
            setOtherErrorStats(prev => ({...prev, [lastStat]: prev[lastStat] - 1}))
            setOtherErrorHistory(prev => prev.slice(0, -1))
        }

    }

    /* Functions to reset all stats back to 0 */

    const resetAllStats = () => {
        // reset Hustle Earned stats
        setHustleEarnedStats({
        crossKill: 0,
        lineKill: 0,
        tool: 0,
        tipOrRoll: 0,
        block: 0,
        overpassKill: 0,
        joust: 0,
        ace: 0,
        setterDump: 0,
        ballOver: 0,
        })

        // reset Hustle Errors stats
        setHustleErrorStats({
        serveError: 0,
        attackError: 0,
        shank: 0,
        doubleTouch: 0,
        fourTouches: 0,
        rotation: 0,
        antenna: 0,
        centerLineFault: 0,
        netTouch: 0,
        setError: 0,
        freeBallOut: 0,
        freeBallDrop: 0
        })
        
        // reset Other Earned stats
        setOtherEarnedStats({
        crossKill: 0,
        lineKill: 0,
        tool: 0,
        tipOrRoll: 0,
        block: 0,
        overpassKill: 0,
        joust: 0,
        ace: 0,
        setterDump: 0,
        ballOver: 0,
        })

        // reset Other Errors stats
        setOtherErrorStats({
        serveError: 0,
        attackError: 0,
        shank: 0,
        doubleTouch: 0,
        fourTouches: 0,
        rotation: 0,
        antenna: 0,
        centerLineFault: 0,
        netTouch: 0,
        setError: 0,
        freeBallOut: 0,
        freeBallDrop: 0
        })

        /* HISTORY reset */
        // back to empty arrays
        setHustleEarnedHistory([])
        setHustleErrorHistory([])
        setOtherEarnedHistory([])
        setOtherErrorHistory([])
    }


    return {

        // Stats objects
        hustleEarnedStats,
        hustleErrorStats,
        otherEarnedStats,
        otherErrorStats,

        // totals
        hustleEarned,
        hustleErrors,
        otherEarned,
        otherErrors,

        // functions
        addStat,
        subtractStat,
        resetAllStats

    }
} 