//@ts-nocheck
import prisma from "../db";


export const createNewCard = async (req, res) => {
    await prisma.card.create({data: {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
    }
    })
}