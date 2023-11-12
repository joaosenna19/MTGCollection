// eslint-disable-next-line react/prop-types
const CardRow = ({ image, name, quantity }) => {
  return (
    <>
      <tr className=" text-center text-sm">
        <td className="border-b border-red-500 border-opacity-40 p-1">
          {quantity}
        </td>
        <td className="border-b border-red-500 border-opacity-40 p-1">
          {name}
        </td>
        <td className="border-b border-red-500 border-opacity-40">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 px-2 rounded-md">
            +
          </button>
        </td>
        <td className="border-b border-red-500 border-opacity-40">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 px-2 rounded-md">
            -
          </button>
        </td>
      </tr>
    </>
  );
};

export default CardRow;
