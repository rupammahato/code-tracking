import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";

connect();

export async function DELETE(req: NextRequest) {
  try {
    const { adminId } = await req.json();

    if (!adminId) {
      return NextResponse.json(
        { success: false, message: "Admin ID is required" },
        { status: 400 }
      );
    }

    // Find and update the user
    const user = await User.findByIdAndUpdate(
      adminId,
      { isAdmin: false },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Admin role removed successfully"
    });

  } catch (error) {
    console.error("Error in removeAdmin:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
