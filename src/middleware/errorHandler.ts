import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let errorMessage = "Something went wrong";
  let errorDetails: any = null;

  /**
   * Mongoose Validation Error
   * Example: required field missing, min/max length, enum mismatch
   */
  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    errorMessage = "Validation failed";
    errorDetails = Object.values(err.errors).map((e: any) => e.message);
  } else if (err instanceof mongoose.Error.CastError) {

  /**
   * Mongoose Cast Error
   * Example: invalid ObjectId
   */
    statusCode = 400;
    errorMessage = "Invalid ID format";
    errorDetails = `Invalid value for ${err.path}`;
  } else if (err.code === 11000) {

  /**
   * MongoDB Duplicate Key Error
   * Example: unique email / username conflict
   */
    statusCode = 409;
    errorMessage = "Duplicate field value";
    errorDetails = Object.keys(err.keyValue).map(
      (key) => `${key} already exists`
    );
  } else if (err instanceof Error) {

  /**
   * Custom Application Error (throw new Error())
   */
    errorMessage = err.message;
    errorDetails = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message: errorMessage,
    error: errorDetails,
    // stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
};

export default errorHandler;
