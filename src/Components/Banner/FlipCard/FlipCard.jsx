import React, { useState } from 'react';
import './FlipCard.css'; // Asegúrate de crear este archivo CSS para estilizar la flip card

const FlipCard = ({ videoUrl, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <video autoPlay loop muted>
            <source src={videoUrl} type="video/mp4"/>
          </video>
        </div>
        <div className="flip-card-back">
          <img src={imageUrl} alt="Flipped content" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;