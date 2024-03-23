import User from "@/models/userModel";
import { connectDB } from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 500 }
      );
    }
    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPass });
    return NextResponse.json(
      { message: "user successfully registered" },
      { status: 201 }
    );
  } catch (error) {
    console.log("error occured", error);
    return NextResponse.json({ message: "Error occured" }, { status: 500 });
  }
}
