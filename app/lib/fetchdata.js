import { Category, User } from "./models";
import { connectDb } from "./utils";

export const fetchUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchCategories = async () => {
  try {
    const result = await Category.find().sort({ createdAt: -1 }).exec();
    const categories = result;
    const categoryCount = result.length;
    return { categories, categoryCount };
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
};