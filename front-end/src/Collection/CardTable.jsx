/* eslint-disable react/prop-types */
import CardRow from "./CardRow";

const tableCellStyle = "py-1 px-4 border-b border-red-500 border-opacity-60";

const CardTable = ({ data }) => {
  return (
    <table className="my-4 text-white mx-16">
      <tbody>
        <tr>
          <th className={tableCellStyle}>Quantity</th>
          <th className={tableCellStyle}>Name</th>
          <th className={tableCellStyle}></th>
          <th className={tableCellStyle}></th>
        </tr>
        {data.map((card) => (
          <CardRow
            key={card.id}
            image={card.card.imageUrl}
            name={card.card.name}
            quantity={card.quantity}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CardTable;
