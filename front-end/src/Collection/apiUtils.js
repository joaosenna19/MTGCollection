const updateCardQuantity = async (name, newQuantity, setCardQuantity) => {
  try {
    const response = await fetch("http://localhost:3001/api/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, quantity: newQuantity }),
    });

    const data = await response.json();
    console.log("Success");
    console.log(data);
    setCardQuantity(newQuantity);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default updateCardQuantity;
