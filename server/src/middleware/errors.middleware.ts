import { CelebrateError, isCelebrateError } from "celebrate";
import { NextFunction, Request, Response } from "express";
import { generateValidationErrors } from "../utils/celebrate.utils";

export const validationErrorHandler: (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (!isCelebrateError(error)) return next(error);

  const errorBody = generateValidationErrors(error);
  res.status(422).json(errorBody);
};
