import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import User  from "@/models/userModels"; // Adjust the import according to your file structure
import { sendPasswordResetEmail } from "@/helpers/mailer"; // Adjust the import according to your file structure
import { connect } from "@/dbConfig/dbConfig";

connect();


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Generate reset token and expiry time
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

    // Update the user document
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;
    await user.save();

    // Construct the reset URL
    const resetURL = `${process.env.CLIENT_URL}/resetPassword/${resetToken}`;

    // Send password reset email
    await sendPasswordResetEmail(user.email, resetURL);

    return NextResponse.json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}


