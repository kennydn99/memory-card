import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gameboard({ cards, handleCardClick }) {
  // // initialize empty array to store cards
  // const [shuffledCards, setShuffledCards] = useState([]);

  // // Once cards are changed (by clicking?), we shuffle the cards
  // useEffect(() => {
  //   const testShuffledArray = shuffleArray(cards);
  //   console.log("shuffled array:", testShuffledArray);
  //   setShuffledCards(testShuffledArray);
  // }, [cards]);

  // // helper function to shuffle cards array
  // const shuffleArray = (array) => {
  //   return [...array].sort(() => Math.random() * 0.5);
  // };

  return (
    <div className="gameboard">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleClick={() => handleCardClick(card.id)}
        ></Card>
      ))}
    </div>
  );
}
