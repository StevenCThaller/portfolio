import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { createUser, findUserByEmail } from "../services/user.services";
import { accepting_users, jwt_secret } from "../config/auth.config";
import bcrypt from "bcryptjs";
import { signJwt } from "../utils/auth.utils";

export const handleRegister = async (req: Request, res: Response) => {
  if (!accepting_users)
    return res
      .status(422)
      .json({ error: "Not accepting new users at this time" });

  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists)
    return res.status(422).json({ error: { email: "Email already in use." } });

  const newUser = await createUser(email, password);

  res.json(newUser);
};

export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  const passwordMatches =
    user && (await bcrypt.compare(password, user.passwordHash!));

  if (!passwordMatches)
    return res.status(422).json({ error: "Invalid email and/or password." });

  const token = signJwt(user, jwt_secret);

  res.status(200).json({ token, uid: user._id });
};
