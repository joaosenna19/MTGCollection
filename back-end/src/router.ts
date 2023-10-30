import { Router } from "express";
import { createNewCard, deleteCard, getAllCards } from "./handlers/card";
import {
  addCardToUser,
  deleteUserCard,
  getUserCards,
} from "./handlers/userCard";
import { body, validationResult } from "express-validator";
import { validationErrorMiddleware } from "./middleware/validationError";

const router = Router();

// CARDS
router.get("/card", getAllCards);
router.post(
  "/card",
  body("name").isString(),
  body("imageUrl").optional().isString(),
  body("quantity").isInt(),
  validationErrorMiddleware,
  addCardToUser
);
router.delete(
  "/card/",
  body("name").isString(),
  validationErrorMiddleware,
  deleteUserCard
);

export default router;
