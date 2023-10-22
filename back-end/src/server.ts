import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "true" });
});

app.use("/api", protect, router);
app.post("/newuser", createNewUser);
app.post("/signin", signin);

export default app;
