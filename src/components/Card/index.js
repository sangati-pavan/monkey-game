import React from 'react'

function Card({card, index, isSelected, isMatched, onClick}) {
  const handleClick = () => {
    if (!isSelected && !isMatched) {
      onClick(index)
    }
  }

  return (
    <div
      className={`card ${isSelected || isMatched ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="card-front">{card.content}</div>
      <div className="card-back">?</div>
    </div>
  )
}

export default Card
