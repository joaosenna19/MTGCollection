const AddForms = ({ searchCards, params, setParams, setCards }) => {
  return (
    <form
      className="flex flex-col "
      onSubmit={(e) => searchCards(e, params, setCards)}
    >
      <label htmlFor="card-name">Search for a card:</label>
      <input
        type="text"
        id="card-name"
        placeholder="Find Card by Name"
        className="border border-opacity-50 border-red-500 rounded flex flex-col px-2 my-2"
        value={params}
        onChange={(e) => setParams(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-1 rounded">
        Search
      </button>
    </form>
  );
};

export default AddForms;
