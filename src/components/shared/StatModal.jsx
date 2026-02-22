import React from 'react'
import './StatModal.css'

function StatModal({
    showStatModal,
    statModalType,
    statModalTeam,
    onSelectStat,
    onCancel
}) {
    if (!showStatModal) return null

    const earnedOptions = [
        ["crossKill", "lineKill", "tool", "tipOrRoll"],
        ['block', 'overpassKill', 'joust'],
        ['ace', 'setterDump', "ballOver"]
    ]

    const errorOptions = [
        ['serveError', 'attackError', 'shank'],
        ['doubleTouch', 'fourTouches', "rotation"],
        ['antenna', 'centerLineFault', 'netTouch'],
        ["setError", "freeBallOut", "freeBallDrop"]
    ]

    const options = statModalType === "earned" ? earnedOptions : errorOptions

    const labels = {

        crossKill: "Cross",
        lineKill: "Line",
        tool: "Tool",
        tipOrRoll: "Tip or Roll",
        block: "Block",
        overpassKill: "Overpass Kill",
        joust: "Joust",
        ace: "Ace",
        setterDump: "Setter Dump",
        ballOver: "Ball Over",
    

        serveError: 'Serve Error',
        attackError: 'Attack Error',
        shank: 'Shank',
        doubleTouch: 'Double-Touch',
        fourTouches: "4 Touches",
        rotation: "Rotation Fault",
        antenna: 'Antenna',
        centerLineFault: 'Center Line Fault',
        netTouch: 'Net Touch',
        setError: "Set Error",
        freeBallOut: "Free Ball OUT",
        freeBallDrop: "Free Ball DROP"
    }

    return (
        <div className='stat-modal-overlay' onClick={onCancel}>
            <div className="stat-modal-content" onClick={(e) => e.stopPropagation()} data-type={statModalType}>
                <p>Select Stat</p>
                <h2 className="stat-modal-subtitle">
                    {statModalTeam === "hustle" ? "Hustle" : "Other Team"} - {statModalType === "earned" ? "Points Earned" : "Errors"}
                </h2>

                <div className='stat-options-container'>
                    {options.map((group, groupIndex) => (
                        <div key={groupIndex} className='stat-option-row'> 
                            {group.map(statKey => (
                                <button
                                key={statKey}
                                onClick={() => onSelectStat(statKey)}
                                className="stat-option-button">
                                    {labels[statKey]}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                <button onClick={onCancel} className="stat-modal-cancel">Cancel</button>
            </div>
        </div>

    )

}

export default StatModal;





