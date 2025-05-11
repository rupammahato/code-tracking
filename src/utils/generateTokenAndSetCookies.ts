import { NextResponse } from "next/server";
import { SignJWT } from 'jose';

export async function generateTokenAndSetCookies(userId: string): Promise<NextResponse> {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }

    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

    // Generate JWT token
    const token = await new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(secretKey);

    // Create a new response with proper structure
    const response = NextResponse.json({
        success: true,
        message: "Login successful",
        redirectUrl: '/dashboard'
    }, { status: 200 });

    // Set the token cookie
    response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax', // Changed from 'strict' to 'lax' for better compatibility
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: '/',
    });

    return response;
}
