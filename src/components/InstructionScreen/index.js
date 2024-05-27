import React from 'react'
import './index.css'

function InstructionScreen({onNext}) {
  return (
    <div className="instruction-screen">
      <h2>Instructions</h2>
      <p>Match the cards to collect bananas!</p>
      <button className="next-button" onClick={onNext}>
        Next
      </button>
    </div>
  )
}

export default InstructionScreen
