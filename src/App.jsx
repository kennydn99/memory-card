import { useState } from "react";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="app">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
    </div>
  );
}

export default App;
