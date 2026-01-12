import { Request, Response } from "express";
import { userService } from "./user.service";

// create user

const createProfile = async (req: Request, res: Response) => {
  const user = req.user;
  const { user_type } = req.body;

  console.log("user", user);
  console.log("user_type", user_type);
  const profile = await userService.createProfile(user?.id!, user_type);

  res.status(201).json({
    success: true,
    data: profile,
  });
};
// get all user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "User get successfull",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

// update user

const updateProfile = async (req: Request, res: Response) => {
  const user = req.user;

  const updatedProfile = await userService.updateProfile(user?.id!, req.body);

  res.status(200).json({
    success: true,
    data: updatedProfile,
  });
};

export const userController = {
  createProfile,
  getAllUsers,
  updateProfile,
};
