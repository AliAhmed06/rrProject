import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/helpers/connection";
import User from "@/models/userModel";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { username, email, password } = reqBody;

    // return NextResponse.json({
    //     data: {username, email, password},
    //     status: 400,
    //     success: false,
    // })
    // check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        error: "user already exists",
        status: 400,
        success: false,
      });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user in db
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: 500,
      success: false,
    });
  }
}
