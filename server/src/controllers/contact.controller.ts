import { NextFunction, Request, Response } from "express";
import { Contact } from "../models";

export const handleCreateContactMessage: (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;

    await Contact.create({ name, email, message });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const handleGetAllContactMessages: (
  req: Request,
  res: Response
) => Promise<any> = async (req: Request, res: Response) => {
  const page = req.query.page ? Number(req.query.page) : 0;

  const allMessages = await Contact.find()
    .skip(page * 10)
    .limit(10);

  res.json(allMessages);
};

export const handleToggleReadStatus: (
  req: Request,
  res: Response
) => Promise<any> = async (req: Request, res: Response) => {
  const { id } = req.params;

  const message = await Contact.findById(id);
  if (!message) return res.sendStatus(404);

  message.read = !message.read;
  await message.save();

  res.sendStatus(200);
};

export const handleDeleteMessage: (
  req: Request,
  res: Response
) => Promise<any> = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.sendStatus(422);

  await Contact.findByIdAndDelete(id);

  res.sendStatus(200);
};
