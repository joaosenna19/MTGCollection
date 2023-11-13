/* eslint-disable react/prop-types */
import CardRow from "./CardRow";
import TableHead from "./TableHead";
import { useState, useEffect } from "react";
import { getCardsApi } from "./apiUtils";

const CardTable = () => {
  const [isUpdated, setIsUpdated] = useState(false); // eslint-disable-line no-unused-vars
  const [data, setData] = useState([]);
  useEffect(() => {
    getCardsApi(setData);
  }, [isUpdated]);

  const cols = ["Quantity", "Name", "", "", ""];
  const tableCellStyle = "py-1 px-4 border-b border-red-500 border-opacity-60";
  return (
    <table className="my-4 text-white mx-16">
      <tbody>
        <tr>
          {cols.map((element, index) => (
            <TableHead key={index} text={element} style={tableCellStyle} />
          ))}
        </tr>
        {data.map((card) => (
          <CardRow
            key={card.id}
            image={card.card.imageUrl}
            name={card.card.name}
            quantity={card.quantity}
            update={setIsUpdated}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CardTable;
