import TrashIcon from "./TrashIcon";
const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white  p-1 px-2 rounded-md"
      onClick={onClick}
    >
      <TrashIcon />
    </button>
  );
};

export default DeleteButton;
