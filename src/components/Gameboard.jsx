import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gameboard({ cards, handleCardClick }) {
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
