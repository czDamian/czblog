import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("DB active.");
      return true;
    }
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB successfully.");
    return true;
  } catch (error) {
    console.error("Error connecting to DB:", error);
    throw new Error("Failed to connect to DB.");
  }
};
