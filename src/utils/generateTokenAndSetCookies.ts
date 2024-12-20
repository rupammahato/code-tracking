import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Define the function to generate token and set cookies
export const generateTokenAndSetCookies = (res: NextResponse, userId: string): string => {
    // Generate a JWT token with the user ID
    const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
        expiresIn: "7d", // Token expiration
    });

    // Set the cookie in the response
    res.cookies.set("token", token, {
        httpOnly: true, // Prevents JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
        sameSite: "strict", // Enforces the SameSite attribute to prevent CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiry time in milliseconds (7 days)
    });

    return token;
};