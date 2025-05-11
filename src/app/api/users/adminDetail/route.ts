import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    
    // Find user and exclude password field
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    if (!user.isAdmin) {
      return NextResponse.json(
        { error: "Unauthorized - Not an admin" },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        college: user.college,
        isAdmin: user.isAdmin
      }
    });

  } catch (error: any) {
    // Handle authentication errors specifically
    if (error.message === "Authentication failed") {
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 }
      );
    }

    console.error("Error in adminDetail:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
