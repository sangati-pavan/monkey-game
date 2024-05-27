import React, {useState} from 'react'
import './index.css'
import Card from '../Card'

function ActivityScreen({cards, onMatch, onAttempt, onFinish}) {
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  const handleCardClick = index => {
    if (selectedCards.length === 2) return

    const newSelectedCards = [...selectedCards, index]
    setSelectedCards(newSelectedCards)

    if (newSelectedCards.length === 2) {
      onAttempt()
      if (cards[newSelectedCards[0]].id === cards[newSelectedCards[1]].id) {
        onMatch()
        setMatchedCards([...matchedCards, ...newSelectedCards])
        if (matchedCards.length + 2 === cards.length) {
          onFinish()
        }
      }
      setTimeout(() => setSelectedCards([]), 1000)
    }
  }

  return (
    <div className="activity-screen">
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            isSelected={selectedCards.includes(index)}
            isMatched={matchedCards.includes(index)}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  )
}

export default ActivityScreen
