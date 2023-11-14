// @ts-nocheck
import prisma from "../db";
import { createNewCard, getCardByName } from "./card";

export const getUserCards = async (req, res) => {
  const user = req.user;
  try {
    const userCards = await prisma.userCard.findMany({
      where: {
        userId: user.id,
      },
      include: {
        card: true,
      },
    });
    return res.status(200).json(userCards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, it's on us" });
  }
};

export const addUserCard = async (req, res) => {
  const { name, imageUrl, quantity } = req.body;
  quantity = parseInt(quantity);
  const user = req.user;

  try {
    const card = await getUserCard(name, user);
    if (card.error) {
      const newCard = await createNewCard(name, imageUrl);
      const userCard = await createUserCard(user.id, newCard.id, quantity);
      return res.status(200).json(userCard);
    } else if (card.notBelongsTo) {
      const userCard = await createUserCard(user.id, card.cardId, quantity);
      return res.status(200).json(userCard);
    } else {
      const updatedUserCard = await updateUserCard(card.id, quantity);
      return res.status(200).json(updatedUserCard);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, it's on us" });
  }
};

export const deleteUserCard = async (req, res) => {
  const user = req.user;
  const { name } = req.params;

  try {
    const card = await getUserCard(name, user);
    if (card.error) return res.status(404).json({ error: "Card not found" });
    if (card.notBelongsTo)
      return res.status(404).json({ error: "User doesn't have this card" });
    const userCard = await prisma.userCard.delete({
      where: {
        id: card.id,
        userId: user.id,
      },
    });
    return res.status(200).json(userCard);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, it's on us" });
  }
};

const getUserCard = async (name, user) => {
  try {
    const card = await getCardByName(name);
    if (card.error) {
      return { error: "Card not found" };
    }
    const userCard = await prisma.userCard.findFirst({
      where: {
        cardId: card.id,
        userId: user.id,
      },
    });
    if (!userCard) {
      console.log("User card not found");
      return { notBelongsTo: true, cardId: card.id };
    }
    return userCard;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Oops, it's on us" });
  }
};

const createUserCard = async (userId, cardId, quantity) => {
  try {
    const userCard = await prisma.userCard.create({
      data: {
        userId,
        cardId,
        quantity,
      },
    });
    return userCard;
  } catch (error) {
    return error;
  }
};

const updateUserCard = async (id, quantity) => {
  const updatedUserCard = await prisma.userCard.update({
    where: {
      id,
    },
    data: {
      quantity,
    },
  });
  return updatedUserCard;
};
