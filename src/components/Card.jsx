const Card = ({ card, isSelected, onClick }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <button
      className={`option-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {capitalize(card.type)} {card.amount} miles
      <br />
      <span className="cost">${card.cost.toFixed(2)}</span>
    </button>
  );
};

export default Card;
