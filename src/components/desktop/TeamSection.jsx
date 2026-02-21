import React from 'react';
import "./TeamSection.css";


// DESKTOP TeamSection


function TeamSection({ earned, errors,
    onAddEarned, onSubtractEarned,
    onAddErrors, onSubtractErrors,
    earnedStats,
    errorStats,
}) {
    return (
        <div className="team-section">
            <div className="stat">
                <div className="stat-item">
                    <p>✅ Points earned: {earned}</p>
                </div>
                <div className="stat-item">
                    <p>❌ Errors made: {errors}</p>
                </div>
            </div>

            <div className="stat-buttons">
                <div className="button-group">
                    <button onClick={onSubtractEarned} className="button-subtract">-</button>
                    <button onClick={onAddEarned} className="button-add">+</button>
                </div>
                <div className="button-group">
                    <button onClick={onSubtractErrors} className="button-subtract">-</button>
                    <button onClick={onAddErrors} className="button-add">+</button>
                </div>
            </div>

            {/* Displaying Stats */}
            <div className="detailed-stats">
                {/* EARNED detailed stats */}
                <div className="stats-column">
                    <p className='stat-line'>Kill: {earnedStats.kill}</p>
                    <p className='stat-line'>Roll: {earnedStats.roll}</p>
                    <p className='stat-line'>Tip: {earnedStats.tip}</p>
                    <p className='stat-line'>Tool: {earnedStats.tool}</p>
                </div>

                <div className="stats-column">
                    <p className='stat-line'>Block: {earnedStats.block}</p>
                    <p className='stat-line'>O.Kill: {earnedStats.overpassKill}</p>
                    <p className='stat-line'>Ace: {earnedStats.ace}</p>
                    <p className='stat-line'>S.Dump: {earnedStats.setterDump}</p>
                </div>

                {/* ERROR detailed stats*/}
                <div className="stats-column">
                    <p className='stat-line'>Serve: {errorStats.serveError}</p>
                    <p className='stat-line'>Attack: {errorStats.attackError}</p>
                    <p className='stat-line'>Shank: {errorStats.shank}</p>
                    <p className='stat-line'>D.Touch: {errorStats.doubleTouch}</p>
                </div>

                <div className="stats-column">
                    <p className='stat-line'>Antenna: {errorStats.antenna}</p>
                    <p className='stat-line'>Line Fault: {errorStats.lineFault}</p>
                    <p className='stat-line'>Net Touch: {errorStats.netTouch}</p>
                </div>



            </div>
        </div>
    )
}

export default TeamSection;