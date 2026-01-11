import { authRouter } from "@/modules/auth/auth.route";
import { Router } from "express";

const router = Router();
router.use("/user", authRouter);
export default router;
