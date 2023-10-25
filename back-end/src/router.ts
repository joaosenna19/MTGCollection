import { Router } from "express";
import { createNewCard, deleteCard, getAllCards } from "./handlers/card";
import { body, validationResult } from "express-validator";
import { validationErrorMiddleware } from "./middleware/validationError";

const router = Router();

// CARDS
router.get('/card', getAllCards);
router.post('/card', body('name').isString(), body('imageUrl').optional().isString(), validationErrorMiddleware, createNewCard);
router.delete('/card/:id', body('id').isString(), validationErrorMiddleware,deleteCard);

export default router;
