import { Router } from "express";

const router = Router();

// CARDS
router.get("/card", (req, res) => {
  res.json({ message: "cards here" });
});

export default router;
