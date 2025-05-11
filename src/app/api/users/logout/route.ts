import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const response = NextResponse.json({
            success: true,
            message: "Logged out successfully"
        });

        // Clear auth token
        response.cookies.set({
            name: "token",
            value: "",
            httpOnly: true,
            expires: new Date(0),
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/"
        });

        // Clear user data
        response.cookies.set({
            name: "userData",
            value: "",
            httpOnly: false,
            expires: new Date(0),
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/"
        });

        // Clear any other auth-related cookies if they exist
        response.cookies.set({
            name: "session",
            value: "",
            expires: new Date(0),
            path: "/"
        });

        return response;

    } catch (error) {
        console.error("Error during logout:", error);
        return NextResponse.json({
            success: false,
            message: "An error occurred while logging out"
        }, { status: 500 });
    }
}