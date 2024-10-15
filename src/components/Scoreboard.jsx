export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <p>Current Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
