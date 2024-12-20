import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Clear the 'token' cookie
        req.cookies.delete("token");

        return NextResponse.json({
            success: true,
            message: "Logged out successfully",
        }, { status: 200 });
    } catch (error) {
        console.error("Error during logout:", error);

        return NextResponse.json({
            success: false,
            message: "An error occurred while logging out",
        }, { status: 500 });
    }
}













// export async function GET(request: NextRequest) {
//     try {
//         const response = NextResponse.json({
//             message: "Logout successful",
//             success: true,
//         }, { status: 200 });

//         response.cookies.set("token", "", { 
//             httpOnly: true,
//             expires: new Date(0),
//         });

//         return response;
//     } catch (error: unknown) {
//         return NextResponse.json({
//             error: error instanceof Error ? error.message : 'Something went wrong',
//         }, { status: 500 });
//     }
// }