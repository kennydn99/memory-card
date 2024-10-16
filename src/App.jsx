import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import { fetchCardData } from "./utils/api";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCardData().then((fetchedCards) => {
      setCards(fetchedCards);
    });
  }, []);

  const handleCardClick = (cardId) => {
    // update score logic
    console.log(`${cardId} was clicked!`);
  };

  return (
    <div className="app">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <Gameboard cards={cards} handleCardClick={handleCardClick}></Gameboard>
    </div>
  );
}

export default App;
