import { useState } from "react";

export function useStatTracking() {

    // for saving set history
    const [savedSets, setSavedSets] = useState([])

    // for team point RUNS
    const [hustleRun, setHustleRun] = useState(0);
    const [otherRun, setOtherRun] = useState(0);
    const [hustleLongestRun, setHustleLongestRun] = useState(0);
    const [otherLongestRun, setOtherLongestRun] = useState(0);

    /* Detailed stats for Hustle */
    // Specific EARNED stats for Hustle
    const [hustleEarnedStats, setHustleEarnedStats] = useState({
        kill: 0,
        tool: 0,
        tip: 0,
        roll: 0,
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
        lift: 0,
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
        kill: 0,
        tool: 0,
        tip: 0,
        roll: 0,
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
        lift: 0,
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
            setHustleEarnedStats(prev => ({ ...prev, [statKey]: prev[statKey] + 1 }))
            setHustleEarnedHistory(prev => ([...prev, statKey]))
        }
        else if (team === "hustle" && type === "error") {
            setHustleErrorStats(prev => ({ ...prev, [statKey]: prev[statKey] + 1 }))
            setHustleErrorHistory(prev => ([...prev, statKey]))
        }
        else if (team === "other" && type === "earned") {
            setOtherEarnedStats(prev => ({ ...prev, [statKey]: prev[statKey] + 1 }))
            setOtherEarnedHistory(prev => ([...prev, statKey]))
        }
        else if (team === "other" && type === "error") {
            setOtherErrorStats(prev => ({ ...prev, [statKey]: prev[statKey] + 1 }))
            setOtherErrorHistory(prev => ([...prev, statKey]))
        }

        // for runs

        if ((team === "hustle" && type === "earned") || team === "other" && type === "error") {
            setHustleRun(prev => {
                const newRun = prev + 1
                setHustleLongestRun(longest => Math.max(longest, newRun))
                return newRun
            })
            setOtherRun(0)
        } else {
            setOtherRun(prev => {
                const newRun = prev + 1
                setOtherLongestRun(longest => Math.max(longest, newRun))
                return newRun
            })
            setHustleRun(0)
        }
    }

    /* Function to SUBTRACT the most recent stat */
    const subtractStat = (team, type) => {
        if (team === "hustle" && type === "earned" && hustleEarnedHistory.length > 0) {
            const lastStat = hustleEarnedHistory[hustleEarnedHistory.length - 1]
            setHustleEarnedStats(prev => ({ ...prev, [lastStat]: prev[lastStat] - 1 }))
            setHustleEarnedHistory(prev => prev.slice(0, -1))
        }
        else if (team === "hustle" && type === "error" && hustleErrorHistory.length > 0) {
            const lastStat = hustleErrorHistory[hustleErrorHistory.length - 1]
            setHustleErrorStats(prev => ({ ...prev, [lastStat]: prev[lastStat] - 1 }))
            setHustleErrorHistory(prev => prev.slice(0, -1))
        }
        else if (team === "other" && type === "earned" && otherEarnedHistory.length > 0) {
            const lastStat = otherEarnedHistory[otherEarnedHistory.length - 1]
            setOtherEarnedStats(prev => ({ ...prev, [lastStat]: prev[lastStat] - 1 }))
            setOtherEarnedHistory(prev => prev.slice(0, -1))
        }
        else if (team === "other" && type === "error" && otherErrorHistory.length > 0) {
            const lastStat = otherErrorHistory[otherErrorHistory.length - 1]
            setOtherErrorStats(prev => ({ ...prev, [lastStat]: prev[lastStat] - 1 }))
            setOtherErrorHistory(prev => prev.slice(0, -1))
        }

    }

    /* Functions to reset all stats back to 0 */

    const resetAllStats = () => {
        // reset Hustle Earned stats
        setHustleEarnedStats({
            kill: 0,
            tool: 0,
            tip: 0,
            roll: 0,
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
            lift: 0,
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
            kill: 0,
            tool: 0,
            tip: 0,
            roll: 0,
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
            lift: 0,
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

        // Reseting the runs
        setHustleRun(0)
        setOtherRun(0)
        setHustleLongestRun(0)
        setOtherLongestRun(0)
    }

    const saveSet = (setNumber) => {
        setSavedSets(prev => {
            const exists = prev.findIndex(s => s.setNumber === setNumber)
            const setData = {
                setNumber,
                hustleEarnedStats,
                hustleErrorStats,
                otherEarnedStats,
                otherErrorStats,
                hustleLongestRun,
                otherLongestRun
            }
            if (exists !== -1) { // if it DOES exist, then update that set
                const updated = [...prev]
                updated[exists] = setData
                return updated

            } else {
                return [...prev, setData] // if it DOESN'T then add it
            }
        })

    }

    const loadSet = (setNumber) => {
        const setData = savedSets.find(s => s.setNumber === setNumber)
        if (!setData) return // nothing

        setHustleEarnedStats(setData.hustleEarnedStats)
        setHustleErrorStats(setData.hustleErrorStats)
        setOtherEarnedStats(setData.otherEarnedStats)
        setOtherErrorStats(setData.otherErrorStats)
        setHustleLongestRun(setData.hustleLongestRun)
        setOtherLongestRun(setData.otherLongestRun)
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
        resetAllStats,

        // run
        hustleRun,
        otherRun,
        hustleLongestRun,
        otherLongestRun,

        // saved sets (as an object)
        savedSets,
        saveSet,

        // loading a set
        loadSet
    }
} 