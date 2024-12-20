import { NextRequest, NextResponse } from "next/server";
import  User  from "@/models/userModels";
import { sendWelcomeEmail } from "@/helpers/mailer"; 
import { connect } from "@/dbConfig/dbConfig";

connect();

// Verify email function
export async function POST(req: NextRequest): Promise<NextResponse> {
    const { code } = await req.json(); // Parse JSON body
    console.log("Received verification code:", code);

    try {
        // Find the user by the verification token and ensure the token is still valid
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpires: { $gt: new Date() },
        });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid or expired verification code" },
                { status: 400 }
            );
        }

        // Update the user's verification status
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpires = undefined;
        await user.save();

        console.log("User after verification:", user);

        // Send the welcome email
        await sendWelcomeEmail(user.email, user.name, user.megalithId);

        // Return a successful response
        return NextResponse.json({
            success: true,
            message: "Email verified successfully",
            user: {
                ...user.toObject(),
                password: undefined, // Ensure password is not returned
            },
        });
    } catch (error: unknown) {
        console.error("Error verifying email:", error);
        return NextResponse.json(
            { success: false, message: "An error occurred while verifying the email" },
            { status: 500 }
        );
    }
}
