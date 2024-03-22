import { NextResponse } from "next/server";

export async function POST(req, res) {
  let { email, name, password } = await req.json();
  if (!email || !name || !password) {
    return NextResponse.json(
      { error: "required fields cannt be empty", ok: false },
      { status: "404" }
    );
  }

  return NextResponse.json({ res: "data sent successfully", ok: true });
}
