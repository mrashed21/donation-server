import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Application } from "express";
import { auth } from "./lib/auth";
import notFound from "./middleware/notFound";
import router from "./routes/router";
import errorHandler from "./middleware/errorHandler";
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

// not found
app.use(notFound);
// global error
app.use(errorHandler);

export default app;
