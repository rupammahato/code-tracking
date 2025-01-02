import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }

        if (user.isAdmin) {
            return NextResponse.json({ success: false, message: "User is already an admin" }, { status: 400 });
        }

        user.isAdmin = true;
        await user.save();

        return NextResponse.json({ success: true, message: "User has been made an admin successfully" });
    } catch (error) {
        console.error("Error adding admin:", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}