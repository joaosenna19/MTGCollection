const AddCardsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative z-10">
        <div className="border-b border-red-500 mb-2">
          <h1 className="text-center text-lg ">Add to Collection</h1>
        </div>
        <div className="flex flex-col">
          <form action="" className="flex flex-col p-2 m-1">
            <label htmlFor="card-name">Search for a card:</label>
            <input
              type="text"
              id="card-name"
              placeholder="Find Card by Name"
              className="border border-opacity-50 border-red-500 rounded mt-1"
            />
          </form>
        </div>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white py-2 px-2 rounded"
        >
          Close
        </button>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};
export default AddCardsModal;
