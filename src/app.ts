import express, { Request, Response } from "express";
import router from "./router/router";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Blood Donation Backend");
});

app.use("/api/v1", router);

export default app;
