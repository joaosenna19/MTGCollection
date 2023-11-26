export const searchCards = async (e, cardName, setCards) => {
  e.preventDefault();
  const res = await fetch(
    `https://api.scryfall.com/cards/search?q=${cardName}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => setCards(data.data))
    .catch((err) => console.log(err));
};
