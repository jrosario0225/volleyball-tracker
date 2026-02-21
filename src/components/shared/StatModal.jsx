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
        ['kill', 'roll', 'tip', 'tool'],
        ['block', 'overpassKill'],
        ['ace', 'setterDump']
    ]

    const errorOptions = [
        ['serveError', 'attackError', 'shank'],
        ['doubleTouch'],
        ['antenna', 'lineFault', 'netTouch']
    ]

    const options = statModalType === "earned" ? earnedOptions : errorOptions

    const labels = {
        kill: 'Kill',
        roll: 'Roll',
        tip: 'Tip',
        tool: 'Tool',
        block: 'Block',
        overpassKill: 'Over Kill',
        ace: 'Ace',
        setterDump: 'Setter Dump',

        serveError: 'Serve Error',
        attackError: 'Attack Error',
        shank: 'Shank',
        doubleTouch: 'Double-Touch',
        antenna: 'Antenna',
        lineFault: 'Line Fault',
        netTouch: 'Net Touch',
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