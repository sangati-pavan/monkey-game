import React from 'react'
import './index.css'

function IntroScreen({onStart}) {
  return (
    <div className="intro-screen">
      <img
        src="https://res.cloudinary.com/dqjbgrrmx/image/upload/v1716733789/Screenshot_2024-05-26_143708_fxkhss.png"
        alt="Monkey"
        className="monkey-image"
      />
      <h1>Welcome Kiddo!</h1>
      <img
        src="https://res.cloudinary.com/dqjbgrrmx/image/upload/v1716782321/Screenshot_2024-05-27_092819_kp1s7o.png"
        alt="Start"
        className="start-button"
        onClick={onStart}
      />
    </div>
  )
}

export default IntroScreen
