import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log("Failed to connect to DB", error);
  }
}
