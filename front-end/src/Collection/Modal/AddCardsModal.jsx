/* eslint-disable react/prop-types */
import { useState } from "react";
import { searchCards } from "../thirdPartyApiUtils";
import AddForms from "./AddForms";
import ModalButtons from "./ModalButtons";
import SelectModal from "./SelectModal";
import { addCardToCollection } from "../apiUtils";

const AddCardsModal = ({ onClose }) => {
  const [params, setParams] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative z-10">
        <div className="border-b border-red-500 mb-2">
          <h1 className="text-center text-lg">Add to Collection</h1>
        </div>
        <div className="flex flex-col p-2 m-1">
          <AddForms
            searchCards={searchCards}
            params={params}
            setParams={setParams}
            setCards={setCards}
          />
          {cards.length > 0 && (
            <SelectModal
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              cards={cards}
              addCardToCollection={addCardToCollection}
            />
          )}
        </div>
        <ModalButtons
          type="button"
          handler={onClose}
          classes="bg-gray-500 text-white py-2 px-2 rounded"
          text="Close"
        />
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default AddCardsModal;
