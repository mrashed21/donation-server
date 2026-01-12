import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Application } from "express";
import { auth } from "./lib/auth";
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

app.use("/api/auth", toNodeHandler(auth));

export default app;
