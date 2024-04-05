import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB.");
      return true;
    }
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB successfully.");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB.");
  }
};
