import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

// create user

const createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const { user_type } = req.body;
    const result = await userService.createProfile(user?.id!, user_type);

    res.status(201).json({
      success: true,
      message: "User Created Successfull",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// get all user
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "User get successfull",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

// get me
const getMe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const result = await userService.getMe(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update user

const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const updatedProfile = await userService.updateProfile(user?.id!, req.body);

    res.status(200).json({
      success: true,
      message: "Profile update successfull",
      data: updatedProfile,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createProfile,
  getAllUsers,
  getMe,
  updateProfile,
};
