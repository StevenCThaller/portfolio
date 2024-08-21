import bcrypt from "bcryptjs";
import { hash_rounds } from "../config/auth.config";
import User from "../models/user.model";
import { Document, HydratedDocument } from "mongoose";
import { IUser } from "../types";

export const createUser = async (
  email: string,
  password: string,
  role?: number
) => {
  const passwordHash = await bcrypt.hash(password, hash_rounds);

  const userData: any = {
    email,
    passwordHash,
    role: role || 3,
  };

  return await User.create(userData);
};

export const findUserByEmail: (email: string) => Promise<IUser | null> = async (
  email: string
) => {
  const user = await User.findOne({
    email: { $regex: new RegExp(`^${email.toLowerCase()}`, "i") },
  });

  return user;
};
