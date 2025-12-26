import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log("Database is connected");

    app.listen(config.port, () => {
      console.log(`Blood Donation backend listening on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
  }
}



main();
