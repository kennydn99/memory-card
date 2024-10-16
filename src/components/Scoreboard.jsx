export default function Scoreboard({ score, highScore }) {
  return (
    <div className="header">
      <div className="header-info">
        <h1>Remember that Pokemon</h1>
        <p>
          Click on as many cards as you can...without clicking on the same card!
        </p>
        <p>Refresh the page to play with new pokemon.</p>
      </div>
      <div className="scoreboard">
        <p>Current Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}
