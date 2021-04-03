import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'
import './testModal.css'
const testModal = ({test}) => {
    return (
        <ModalContainer>
            <div className = "test-modal center">
            <h1>{test}</h1>
            {/* Welcome to Modal */}
            </div>
        </ModalContainer>
       
    )
}

export default testModal
