import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 4,
      max: 15,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);


const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
    categoryDesc: {
      type: String,
      required: true,
      unique: true,
      min: 3,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
