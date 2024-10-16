import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import { fetchCardData } from "./utils/api";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchCardData().then((fetchedCards) => {
      setCards(fetchedCards);
    });
  }, []);

  // function to shuffle cards after each click
  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  };

  const handleCardClick = (cardId) => {
    // update score logic
    console.log(`${cardId} was clicked!`);
    if (clickedCards.includes(cardId)) {
      // reset game if card has been clicked already
      setScore(0);
      setClickedCards([]);

      // update highscore
      if (score > highScore) {
        setHighScore(score);
      }
    } else {
      // new card clicked -> increment score & add to clickedCards
      setScore(score + 1);
      setClickedCards([...clickedCards, cardId]);

      // shuffle cards after valid click
      shuffleCards();
    }
  };

  return (
    <div className="app">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <Gameboard cards={cards} handleCardClick={handleCardClick}></Gameboard>
    </div>
  );
}

export default App;
