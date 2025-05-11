import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModels";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token");
    console.log("Token found:", token); // Debug log

    const userId = await getDataFromToken(request);
    
    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "Not authenticated"
      });
    }

    const user = await User.findById(userId).select("-password");
    
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found"
      });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        isAdmin: user.isAdmin
      }
    });

  } catch (error) {
    console.error("Auth error:", error); // Debug log
    return NextResponse.json({
      success: false,
      message: "Authentication error:" + error
    });
  }
} 