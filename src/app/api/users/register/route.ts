import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/mailer";
import { generateTokenAndSetCookies } from "@/utils/generateTokenAndSetCookies";

connect();

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const {
            name,
            email,
            password,
            confirmpassword,
            phone,
            college,
            state,
            city,
            gender,
            yearOfStudy,
            mipId,
        } = await req.json();

        if (!name || !email || !password || !confirmpassword) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
        }
        if (password !== confirmpassword) {
            return NextResponse.json({ success: false, message: "Passwords do not match" }, { status: 400 });
        }

        const normalizedEmail = email.toLowerCase();
        const userAlreadyExists = await User.findOne({ email: normalizedEmail });
        if (userAlreadyExists) {
            return NextResponse.json({ success: false, message: "Email is already in use" }, { status: 400 });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationTokenExpires = new Date(Date.now() + 15 * 60 * 1000);

        const user = new User({
            name,
            email: normalizedEmail,
            password: hashedPassword,
            phone,
            college,
            state,
            city,
            gender,
            yearOfStudy,
            mipId,
            verificationToken,
            verificationTokenExpires,
            isVerified: false,
            isAdmin: false,
        });

        await user.save();

        const res = new NextResponse();

        generateTokenAndSetCookies(res, user._id);
        await sendVerificationEmail(user.email, verificationToken);

        return NextResponse.json({
            success: true,
            message: "User created successfully. Please verify your email.",
        }, { status: 201 });
        } catch (error: unknown) {
        console.error("Error in signup:", error);

        if (error instanceof Error && "code" in error && (error as any).code === 11000) {
            return NextResponse.json(
                { success: false, message: "Email is already in use" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, message: (error as Error).message || "Internal Server Error" },
            { status: 500 }
        );
    }
}



















// export async function POST(request: NextRequest) {
//     try {
//         await connect();
//         const reqBody = await request.json();
//         const { username, email, password } = reqBody;

//         console.log(reqBody);

//         const user = await User.findOne({ email });

//         if (user) {
//             return NextResponse.json({ error: "User already exists" }, { status: 400 });
//         }

//         const salt = await bcryptjs.genSalt(10);
//         const hashedPassword = await bcryptjs.hash(password, salt);

//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//         });

//         const savedUser = await newUser.save();
//         console.log(savedUser);

//         // send verification email
//         await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

//         return NextResponse.json({
//             message: "User created successfully",
//             success: true,
//             savedUser,
//         });
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             return NextResponse.json({ error: error.message }, { status: 500 });
//         }
//         return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//     }
// }

