import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModels";
import { generateTokenAndSetCookies } from "@/utils/generateTokenAndSetCookies";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const { email, password } = await req.json();
        console.log("Login attempt for email:", email);

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 400 }
            );
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "Invalid password" },
                { status: 400 }
            );
        }

        if (!user.isVerified) {
            return NextResponse.json(
                { success: false, message: "Email not verified" },
                { status: 403 }
            );
        }

        // Generate token and get response with cookie
        const tokenResponse = await generateTokenAndSetCookies(user._id.toString());

        // Get the cookies from tokenResponse
        const cookies = tokenResponse.cookies;

        // Create final response
        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id.toString(),
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                isVerified: user.isVerified,
            },
            redirectUrl: '/dashboard'
        }, { status: 200 });

        // Copy cookies from tokenResponse to final response
        cookies.getAll().forEach(cookie => {
            response.cookies.set({
                ...cookie,
                sameSite: 'lax', // Changed from 'strict' to 'lax'
            });
        });

        return response;

    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json(
            { success: false, message: "An error occurred during login" },
            { status: 500 }
        );
    }
}
