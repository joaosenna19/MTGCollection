import { useState } from "react";
import QuantityModifier from "./QuantityModifier";
import updateCardQuantity from "./apiUtils";

// eslint-disable-next-line react/prop-types
const CardRow = ({ image, name, quantity }) => {
  const tdStyle = "border-b border-red-500 border-opacity-40 p-1";
  const [cardQuantity, setCardQuantity] = useState(quantity);

  const addCard = () => {
    const newQuantity = cardQuantity + 1;
    updateCardQuantity(name, newQuantity, setCardQuantity);
  };

  const removeCard = () => {
    const newQuantity = Math.max(0, cardQuantity - 1);
    updateCardQuantity(name, newQuantity, setCardQuantity);
  };

  return (
    <>
      <tr className=" text-center text-sm">
        <td className={tdStyle}>{cardQuantity}</td>
        <td className={tdStyle}>{name}</td>
        <td className={tdStyle}>
          <QuantityModifier
            text="+"
            classes="bg-green-500 hover:bg-green-700 text-white font-bold p-1 px-2 rounded-md"
            onClick={addCard}
          />
        </td>
        <td className={tdStyle}>
          <QuantityModifier
            text="-"
            classes="bg-red-500 hover:bg-red-700 text-white font-bold p-1 px-2 rounded-md"
            onClick={removeCard}
          />
        </td>
      </tr>
    </>
  );
};

export default CardRow;
