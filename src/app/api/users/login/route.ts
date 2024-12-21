import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import  User  from "@/models/userModels"; 
import { generateTokenAndSetCookies } from "@/utils/generateTokenAndSetCookies";
import { connect } from "@/dbConfig/dbConfig";

connect();


// Login function
export async function POST(req: NextRequest): Promise<NextResponse> {
    const { email, password } = await req.json(); // Parse JSON body
    console.log("Login attempt for email:", email);

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 400 }
            );
        }

        // Validate the password
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "Invalid password" },
                { status: 400 }
            );
        }

        // Check if the user's email is verified
        if (!user.isVerified) {
            return NextResponse.json(
                { 
                    success: true,
                    message: "Email not verified",
                    isVerified: false,
                    user: {
                        email: user.email,
                        name: user.name,
                    },
                },
                { status: 200 }
            );
        }

        // Generate the JWT token and set cookies
        const res = new NextResponse();

        generateTokenAndSetCookies(res, user._id);

        // Return a successful response
        return NextResponse.json({
            success: true,
            message: "Login successful",
            isVerified: true,
            user: {
                ...user.toObject(),
                password: undefined, // Don't send the password
                isAdmin: user.isAdmin, // Include user role if needed
            },
        });
    } catch (error: unknown) {
        console.error("Error logging in:", error);
        return NextResponse.json(
            { success: false, message: "An error occurred during login" },
            { status: 500 }
        );
    }
}

































// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModels";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// connect();

// export async function POST(request: NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const { email, password } = reqBody;

//         console.log(reqBody);

//         const user = await User.findOne({ email });

//         if (!user) {
//             return NextResponse.json({ error: "User does not exist" }, { status: 400 });
//         }
//         console.log("user found");

//         const validPassword = await bcryptjs.compare(password, user.password);

//         if (!validPassword) {
//             return NextResponse.json({ error: "Invalid password" }, { status: 400 });
//         }

//         //create token data
//         const tokenData = {
//             id: user._id,
//             username: user.username,
//             email: user.email,
//         }
//         const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

//         const response = NextResponse.json({
//             message: "Login successful",
//             success: true,
//         }, { status: 200 });

//         response.cookies.set("token", token, {
//             httpOnly: true,
//         });

//         return response;

//     } catch (error: unknown) {
//         return NextResponse.json({
//             error: error instanceof Error ? error.message : 'Something went wrong',
//         }, { status: 500 });
//     }
// }
