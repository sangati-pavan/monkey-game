import React from 'react'
import './index.css'

function FinalScreen({bananas, attempts}) {
  return (
    <div className="final-screen">
      <h2>Congratulations!</h2>
      <p>You collected {bananas} bananas!</p>
      <p>Total attempts: {attempts}</p>
    </div>
  )
}

export default FinalScreen
