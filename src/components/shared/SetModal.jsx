import React from 'react';
import './SetModal.css'

function SetModal({ showModal, pendingAction, currentSet, onConfirm, onCancel }) {

    if (!showModal) return null

    const targetSet = pendingAction === "next" ? currentSet + 1 : currentSet - 1

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Are you sure?</h2>
                <p> Do you want to move to Set {targetSet}? </p>

                <p className="modal-warning">
                    Current scores will be saved and reset to 0-0
                </p>

                <div className="modal-buttons">
                    <button onClick={onCancel} className="modal-cancel">Cancel</button>
                    <button onClick={onConfirm} className="modal-confirm">Confirm</button>
                </div>

            </div>
        </div>
    )


}

export default SetModal;
