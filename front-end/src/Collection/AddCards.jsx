import { createPortal } from "react-dom";
import { useState } from "react";
import AddCardsModal from "./AddCardsModal";
import PlusIcon from "./PlusIcon";

const AddCards = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClosing = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="grid grid-cols-4">
        <button
          className="flex flex-row justify-center items-center text-sm text-white col-span-2 mt-6  hover:text-gray-500"
          onClick={handleClick}
        >
          <PlusIcon />
          Add Cards
        </button>
        {showModal &&
          createPortal(
            <AddCardsModal onClose={handleClosing} />,
            document.getElementById("cardModal")
          )}
      </div>
    </>
  );
};

export default AddCards;
