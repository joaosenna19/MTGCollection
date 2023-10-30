//@ts-nocheck
import prisma from "../db";

export const getAllCards = async (req, res) => {
    try{
        const cards = await prisma.card.findMany();
        res.json(cards);
    } catch (e) {
        console.log(e);
    }
    };

export const getCardById = async (req, res) => {
    try{
        const card = await prisma.card.findUnique({
        where: {
            id: req.params.id
        }
        });
        res.json(card);
    } catch (e) {
        console.log(e);
    }
    }

export const createNewCard = async (req, res) => {
  try{
    const card = await prisma.card.create({
      data: {
        name: req.body.name,
        imageUrl: req.body.imageUrl !== undefined ? req.body.imageUrl : null,
      },
    });
    res.json(card);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCard = async (req, res) => {
  try{
    const card = await prisma.card.delete({
      where: {
        id: req.params.id
      }
    });
    res.json(card);
  } catch (e) {
    console.log(e);
  }
}
