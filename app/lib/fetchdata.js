import { Category, User } from "./models";

export const fetchUsers = async () => {
  try {
    const result = await User.find().sort({ createdAt: -1 }).maxTimeMS(30000).exec();
    const users = result;
    const userCount = result.length;
    return { users, userCount };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchCategories = async () => {
  try {
    const result = await Category.find()
      .sort({ createdAt: -1 })
      .maxTimeMS(30000)
      .exec();
    const categories = result;
    const categoryCount = result.length;
    return { categories, categoryCount };
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
};
