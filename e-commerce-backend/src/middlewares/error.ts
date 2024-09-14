import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  error: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.message = error.message || "Internal Server Error";
  error.statusCode = error.statusCode || 500;

  return res.status(error.statusCode).json({
    status: false,
    message: error.message,
  });
};

export const TryCatch =
  (func: ControllerType) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next).catch(next));
  };
