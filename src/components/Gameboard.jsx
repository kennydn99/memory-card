import { useState, useEffect } from "react";
import Card from "./Card";
export default function Gameboard({ cards, handleCardClick }) {
  // initialize empty array to store cards
  const [shuffledCards, setShuffledCards] = useState([]);

  // Once cards are changed (by clicking?), we shuffle the cards
  useEffect(() => {
    setShuffledCards(shuffleArray(cards));
  }, [cards]);

  // helper function to shuffle cards array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() * 0.5);
  };

  return (
    <div className="gameboard">
      {shuffledCards.map((card) => {
        <Card
          key={card.id}
          card={card}
          handleCardClick={() => handleCardClick(card.id)}
        ></Card>;
      })}
    </div>
  );
}
