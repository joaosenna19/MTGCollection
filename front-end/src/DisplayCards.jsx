import { useEffect, useState } from "react";

const DisplayCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:3001/api/card", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success");
        setCards(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <h1>{card.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default DisplayCards;
