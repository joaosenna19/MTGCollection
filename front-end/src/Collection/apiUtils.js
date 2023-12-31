const apiUrl = "http://127.0.0.1:3001";

export const getCardsApi = async (setData) => {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  await fetch(`${apiUrl}/api/card`, {
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

export const updateCardQuantityApi = async (
  name,
  newQuantity,
  setCardQuantity
) => {
  try {
    const response = await fetch(`${apiUrl}/api/card`, {
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

export const deleteCardApi = async (name) => {
  try {
    const response = await fetch(`${apiUrl}/api/card/${name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();
    console.log("Success");
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const addCardToCollection = async (name) => {
  try {
    const response = await fetch(`${apiUrl}/api/card`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, imageUrl: undefined, quantity: 1 }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
