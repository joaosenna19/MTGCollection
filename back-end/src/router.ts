import { Router } from "express";
import { body } from "express-validator";
import { validationErrorMiddleware } from "./middleware/validationError";
import { addUserCard, getUserCards, deleteUserCard } from "./handlers/userCard";

const router = Router();

// CARDS

router.post(
  "/card",
  body("name").isString(),
  body("imageUrl").optional().isString(),
  body("quantity").isInt(),
  validationErrorMiddleware,
  addUserCard
);
router.get("/card", getUserCards);
router.delete("/card/:name", deleteUserCard);

export default router;
