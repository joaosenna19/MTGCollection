// @ts-nocheck
import jwt from "jsonwebtoken";
import bcrypto from "bcrypt";

export const hashPassword = (password) => {
  return bcrypto.hash(password, 5);
};

export const comparePasswords = (password, hash) => {
  return bcrypto.compare(password, hash);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized!");
    return;
  }

  const token = bearer.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Invalid Token!" });
    res.send("Invalid token!");
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
    return;
  } catch {
    res.status(401);
    res.send("Invalid token!");
    return;
  }
};
