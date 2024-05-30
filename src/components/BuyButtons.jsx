import { useEffect, useState } from "react";
import { cardData } from "../data/cardData";
import Card from "./Card";

const BuyButtons = ({ setMiles, setCost }) => {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);

  useEffect(() => {
    if (selectedCard) {
      setMiles(selectedCard.amount);
      setCost(selectedCard.cost);
    }
  }, [selectedCard, setMiles, setCost]);

  return (
    <div className="options">
      {cardData.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            isSelected={selectedCard === card}
            onClick={() => setSelectedCard(card)}
          />
        );
      })}
    </div>
  );
};

export default BuyButtons;
