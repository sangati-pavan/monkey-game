import React, {useState} from 'react'
import './App.css'

import IntroScreen from './components/IntroScreen'
import InstructionScreen from './components/InstructionScreen'
import ActivityScreen from './components/ActivityScreen'
import FinalScreen from './components/FinalScreen'
import cardData from './data/cards.json'

function App() {
  const [screen, setScreen] = useState('intro')
  const [matches, setMatches] = useState(0)
  const [attempts, setAttempts] = useState(0)

  const navigateTo = nextScreen => {
    setScreen(nextScreen)
  }

  const incrementMatches = () => {
    setMatches(matches + 1)
  }

  const incrementAttempts = () => {
    setAttempts(attempts + 1)
  }

  return (
    <div className="App">

      {screen === 'intro' && (
        <IntroScreen onStart={() => navigateTo('instructions')} />
      )}
      {screen === 'instructions' && (
        <InstructionScreen onNext={() => navigateTo('activity')} />
      )}
      {screen === 'activity' && (
        <ActivityScreen
          cards={cardData}
          onMatch={incrementMatches}
          onAttempt={incrementAttempts}
          onFinish={() => navigateTo('final')}
        />
      )}
      {screen === 'final' && (
        <FinalScreen matches={matches} attempts={attempts} />
      )}
    
    </div>
  )
}

export default App
