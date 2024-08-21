import { Schema, model } from "mongoose";
import { EMAIL_REGEX } from "../config/constants.config";
import { IUser } from "../types";

export const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      match: EMAIL_REGEX,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      min: 1,
      max: 3,
      default: 3,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);
export default User;
