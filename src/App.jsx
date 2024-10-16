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
  const [gameOver, setGameOver] = useState(false);

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
    if (clickedCards.includes(cardId)) {
      // reset game if card has been clicked already
      setGameOver(true);
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

      // Check if player win
      if (clickedCards.length + 1 === cards.length) {
        setGameOver(true);
        setHighScore(score + 1);
      } else {
        // shuffle cards after valid click
        shuffleCards();
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setClickedCards([]);
    setGameOver(false);
    shuffleCards();
  };

  return (
    <div className="app">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      {gameOver ? (
        <div className="gameover">
          <p>
            {clickedCards.length === cards.length ? "You win!" : "Game over!"}
          </p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      ) : (
        <Gameboard cards={cards} handleCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
