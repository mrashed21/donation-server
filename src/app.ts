import cors from "cors";
import express, { Application } from "express";
import { authRouter } from "./modules/auth/auth.route";
import router from "./routes/router";
const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blood Donation API Running");
});

// 👇 IMPORTANT
app.use("/api/v1", router);

app.use("/api/auth", authRouter);

export default app;
