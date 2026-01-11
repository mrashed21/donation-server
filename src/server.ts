import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "@/lib/mongodb";
import app from "./app";

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
