export default function Card({ card, handleCardClick }) {
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
}
