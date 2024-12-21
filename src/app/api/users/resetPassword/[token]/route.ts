import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import  User  from "@/models/userModels"; // Adjust import based on your project structure
import { sendResetSuccessEmail } from "@/helpers/mailer"; // Adjust import as needed

export async function POST(req: NextRequest, { params }: { params: { token: string } }) {
  try {
    const { token } = params; // Dynamic token from the URL
    const { password } = await req.json(); // Password from the request body

    // Find user by reset token and ensure token is not expired
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: new Date() },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Update user data
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    // Send success email
    await sendResetSuccessEmail(user.email);

    return NextResponse.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while resetting the password" },
      { status: 500 }
    );
  }
}
