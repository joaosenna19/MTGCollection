//@ts-nocheck
import prisma from "../db";

export const getCardByName = async (name) => {
  console.log(name);
  try {
    const card = await prisma.card.findFirst({
      where: {
        name,
      },
    });
    if (!card) {
      return { error: "Card not found" };
    }
    return card;
  } catch (error) {
    return error;
  }
};

export const createNewCard = async (name, imageUrl) => {
  console.log(name, imageUrl);
  try {
    const card = await prisma.card.create({
      data: {
        name,
        imageUrl: imageUrl !== undefined ? imageUrl : null,
      },
    });
    return card;
  } catch (error) {
    return { error: "Card already exists" };
  }
};

export const deleteCard = async (req, res) => {
  const { name } = req.body;
  try {
    const card = await prisma.card.delete({
      where: {
        name,
      },
    });
    res.json(card);
  } catch (error) {
    res.status(404).json({ error: "Card not found" });
  }
};

export const updateCard = async (req, res) => {
  const { name, imageUrl } = req.body;
  try {
    const updatedCard = await prisma.card.update({
      where: {
        name,
      },
      data: {
        imageUrl: imageUrl !== undefined ? imageUrl : null,
      },
    });
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(404).json({ error: "Card not found" });
  }
};
