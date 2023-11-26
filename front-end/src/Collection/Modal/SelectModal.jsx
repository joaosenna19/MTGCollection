/* eslint-disable react/prop-types */
import ModalButtons from "./ModalButtons";
import { useEffect } from "react";

const SelectModal = ({
  setSelectedCard,
  selectedCard,
  cards,
  addCardToCollection,
}) => {
  // Handle the case where there's only one card
  useEffect(() => {
    // Handle the case where there's only one card
    if (cards.length === 1 && !selectedCard) {
      setSelectedCard(cards[0].name);
    }
  }, [cards, selectedCard, setSelectedCard]);

  return (
    <>
      <select
        onChange={(e) => setSelectedCard(e.target.value)}
        value={selectedCard ? selectedCard.name : ""}
        className="border border-opacity-50 border-red-500 rounded flex flex-col px-2 my-2 "
      >
        <option value="" disabled>
          Select a card
        </option>
        {cards.map((card) => (
          <option key={card.id} value={card.name}>
            {card.name}
          </option>
        ))}
      </select>
      <ModalButtons
        type="button"
        handler={() => {
          addCardToCollection(selectedCard); // Access the name
        }}
        classes="bg-green-500 text-white p-1 rounded"
        text="Add Card"
      />
    </>
  );
};

export default SelectModal;
