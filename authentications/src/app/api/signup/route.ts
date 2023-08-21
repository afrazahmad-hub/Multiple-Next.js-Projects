import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { username, email, password } = reqBody;

    console.log(reqBody);

    // check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    // hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    // creating new user
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });

    // saving new user to database
    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
      message: "User saved Successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ Error: error }, { status: 500 });
  }
}
