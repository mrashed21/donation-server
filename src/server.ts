import dotenv from "dotenv";
dotenv.config();

import { connectDB, connectMongoose } from "@/lib/mongodb";
import app from "./app";

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();
  await connectMongoose();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
