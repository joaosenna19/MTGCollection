// @ts-nocheck
import { create } from "domain";
import prisma from "../db";
import { createNewCard } from "./card";

export const addCardToUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        }
    });

    if(!user) {
        res.status(404).send("User not found!");
        return;
    }

    const card = await prisma.card.findUnique({
        where: {
            name: req.body.name
        }
    });

    if(!card) {
        card = await createNewCard(req, res);
    }

    const userCard = await prisma.userCard.create({
        data: {
            userId: user.id,
            cardId: card.id,
            quantity: req.body.quantity
        }
    });

    res.json(userCard);
}

export const getUserCards = async (req, res) => {
    const userCards = await prisma.userCard.findMany({
        where: {
            userId: req.user.id
        }
    });

    if(!userCards) {
        res.status(404).send("User not found!");
        return;
    }

    res.json(userCards.card);
}

export const deleteUserCard = async (req, res) => {

    const card = await prisma.card.findUnique({
        where: {
            name: req.body.name
        }
    });

    if(!card) {
        res.status(404).send("Card not found!");
        return;
    }

    const userCard = await prisma.userCard.delete({
        where: {
            cardId: card.id
        }
    });

    res.json(userCard);
}