import { userRouter } from "@/modules/user/user.route";
import { Router } from "express";

const router = Router();
router.use("/user", userRouter);
export default router;
