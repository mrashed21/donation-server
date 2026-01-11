import { Request, Response } from "express";
import { authService } from "./auth.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await authService.getAllUsers();
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

export const authController = {
  getAllUsers,
};
