import authMiddleWare, { UserRole } from "@/middleware/authMiddleWare";
import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// get all user
router.use(
  "/all-user",
  authMiddleWare(UserRole.admin),
  userController.getAllUsers
);
// get me
router.use(
  "/get-me",
  authMiddleWare(UserRole.admin, UserRole.user),
  userController.getMe
);

// // create user
// router.post(
//   "/profile",
//   authMiddleWare(UserRole.admin, UserRole.user),
//   userController.createProfile
// );

// update user
router.patch(
  "/profile",
  authMiddleWare(UserRole.admin, UserRole.user),
  userController.updateProfile
);

export const userRouter = router;
