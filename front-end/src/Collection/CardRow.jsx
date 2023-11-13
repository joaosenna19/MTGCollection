import { useState } from "react";
import QuantityModifier from "./QuantityModifier";
import { updateCardQuantityApi, deleteCardApi } from "./apiUtils";
import DeleteButton from "./DeleteButton";

// eslint-disable-next-line react/prop-types
const CardRow = ({ image, name, quantity, update }) => {
  const tdStyle = "border-b border-red-500 border-opacity-40 p-1";
  const [cardQuantity, setCardQuantity] = useState(quantity);

  const increaseCard = async () => {
    const newQuantity = cardQuantity + 1;
    await updateCardQuantityApi(name, newQuantity, setCardQuantity);
  };

  const decreaseCard = async () => {
    const newQuantity = Math.max(1, cardQuantity - 1);
    await updateCardQuantityApi(name, newQuantity, setCardQuantity);
  };

  const deleteCard = async () => {
    deleteCardApi(name);
    update((prev) => !prev);
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
            onClick={increaseCard}
          />
        </td>
        <td className={tdStyle}>
          <QuantityModifier
            text="-"
            classes="bg-red-500 hover:bg-red-700 text-white font-bold p-1 px-2 rounded-md"
            onClick={decreaseCard}
          />
        </td>
        <td className={tdStyle}>
          <DeleteButton onClick={deleteCard} />
        </td>
      </tr>
    </>
  );
};

export default CardRow;
