import mongoose from "mongoose";

import "./models"
import dotenv from "dotenv";

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
  throw new Error("DATABASE_URL environment variable is not set.");
}
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string, {
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASSWORD,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

export { connectDB, mongoose };