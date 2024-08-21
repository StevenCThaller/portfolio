import { celebrate, Joi, Segments } from "celebrate";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/auth.config";
import User from "../models/user.model";
import { AuthRequest } from "../types";

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.get("authorization");

  if (!auth) return res.status(401).json({ error: "You must be logged in." });

  const token = auth.replace("Bearer ", "");
  jwt.verify(token, jwt_secret, (err: any, payload: any) => {
    if (err) return res.status(401).json({ error: "You must be logged in." });

    const { sub } = payload;
    User.findById(sub).then((user) => {
      req.user = user;
      next();
    });
  });
};

export const requireAdmin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  if (user.role > 1)
    return res.status(403).json({ error: "Elevated credentials required." });

  next();
};

export const validateRegistration = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.base": "Email must be a string.",
      "string.email": "Invalid email address.",
      "any.required": "Email is required.",
    }),
    password: Joi.string().min(8).max(24).required().messages({
      "string.base": "Password must be a string.",
      "string.min": "Password must be at least 8 characters.",
      "string.max": "Password cannot be longer than 24 characters.",
      "any.required": "Password is required.",
    }),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .messages({
        "string.base": "Password confirmation must be a string.",
        "any.required": "You must confirm your password.",
        "any.only": "Passwords must match.",
      }),
  }),
});

export const validateLogin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.base": "Email must be a string.",
      "string.email": "Invalid email address.",
      "any.required": "Email is required.",
    }),
    password: Joi.string().min(8).max(24).required().messages({
      "string.base": "Password is required.",
      "string.min": "Password must be at least 8 characters.",
      "string.max": "Password cannot be longer than 24 characters",
      "any.required": "Password is required.",
    }),
  }),
});
