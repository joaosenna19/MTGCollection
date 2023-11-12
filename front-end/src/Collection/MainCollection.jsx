import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CardTable from "./CardTable";

const MainCollection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    const token = localStorage.getItem("token");

    fetch("https://mtgcollectionapi.onrender.com/api/card", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success");
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen  bg-neutral-700">
        <div className="flex flex-col">
          <h2 className="m-auto pt-7 text-white text-lg">Collection</h2>
          <CardTable data={data} />
        </div>
      </div>
    </>
  );
};

export default MainCollection;
