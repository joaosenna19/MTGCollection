// @ts-nocheck
import { createJWT, hashPassword, comparePasswords } from "../modules/auth";
import prisma from "../db";

export const createNewUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    if (error.name === "PrismaClientKnownRequestError") {
      res.status(403);
      res.send({ status: "error", message: "Username already exists" });
      return;
    } else {
      res.status(500);
      res.send({ status: "error", message: "Error creating user" });
    }
  }
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    console.log("User not found");
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    console.log("Invalid password");
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
