import jwt from "jsonwebtoken";
import { IUser } from "../types";

export const signJwt = (user: IUser, secret: string) => {
  const payload = {
    sub: user._id,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};
