import { Category, User } from "./models";

export const fetchUsers = async () => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    const userCount = users.length;
    return { users, userCount };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
};

export const fetchCategories = async () => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    const categoryCount = categories.length;
    return { categories, categoryCount };
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
};
