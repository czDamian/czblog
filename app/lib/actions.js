"use server";
import { revalidatePath } from "next/cache";
import { Category, User } from "./models";
import { connectDb } from "./utils";

export const addUser = async (formData) => {
  const { username, password, role, email } = Object.fromEntries(formData);

  try {
    connectDb();
    const newUser = new User({
      username,
      password,
      role,
      email,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/user");
};

export const addCategory = async (formData) => {
  const { categoryName, categoryDesc } = Object.fromEntries(formData);
  if (!categoryName || !categoryDesc) {
    return { success: false, message: "Fields cannot be empty" };
  }
  try {
    connectDb();
    const newCategory = new Category({
      categoryName,
      categoryDesc,
    });
    await newCategory.save();
    revalidatePath("/dashboard/category");
    return { success: true, message: "Category created successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to create category" };
  }
};
