import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModels"; // Adjust import based on your project structure
import { sendResetSuccessEmail } from "@/helpers/mailer"; // Adjust import as needed
import { connect } from "@/dbConfig/dbConfig";

connect();

// Interfaces
interface ResetPasswordRequest {
  password: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

interface UserDocument extends Document {
  email: string;
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpiresAt?: Date;
  save(): Promise<UserDocument>;
}

export async function POST(
  req: NextRequest,
  context: { params: { token: string } }
): Promise<NextResponse<ResetPasswordResponse>> {
  try {
    const { params } = context;
    const { token } = params;
    console.log('Received token:', token); // Add this line to log the token value
    const { password }: ResetPasswordRequest = await req.json();

    // Find user by reset token and ensure token is not expired
    const user: UserDocument | null = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: new Date() },
    }).exec();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword: string = await bcryptjs.hash(password, 10);

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
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, message: "An unknown error occurred while resetting the password" },
      { status: 500 }
    );
  }
}
