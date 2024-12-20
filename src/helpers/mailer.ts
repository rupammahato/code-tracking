import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate";
import transporter, { sender } from "./email.config";
import dotenv from "dotenv";

dotenv.config();

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Email Verification",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken)
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Verification email sent successfully:", info.messageId);
    } catch (error) {
        console.error(`Error sending verification email:`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email: string, username: string, megalithId: string) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Welcome to Megalith 2025",
            html: WELCOME_EMAIL_TEMPLATE.replace("{firstName}", username)
                                        .replace("{megalithId}", megalithId)
        };
        const info = await transporter.sendMail(mailOptions);
        console.log("Welcome email sent successfully:", info.messageId);
    } catch (error) {
        console.error(`Error sending welcome email:`, error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
};


export const sendPasswordResetEmail = async (email: string, resetURL: string) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,  // Change this line
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
                "{resetURL}", resetURL
            ),
            category: "password-reset",
        };

        // Send the email and get the info
        const info = await transporter.sendMail(mailOptions);
        
        console.log("Password reset email sent successfully:", info.messageId);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email: string) => {

    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "password-reset",
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Password reset email sent successfully:", info.messageId);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}




































// import nodemailer from "nodemailer";
// import User from "@/models/userModels";
// import bcryptjs from "bcryptjs";

// interface EmailParams {
//     email: string;
//     emailType: 'VERIFY' | 'RESET';
//     userId: string;
// }

// export const sendEmail = async ({ email, emailType, userId }: EmailParams) => {
//     try {
//         const hashedToken = await bcryptjs.hash(userId.toString(), 10);

//         if (emailType === "VERIFY") {
//             await User.findByIdAndUpdate(userId, {
//                 $set: {
//                     verifyToken: hashedToken,
//                     verifyTokenExpiry: Date.now() + 3600000,
//                 },
//             });
//         } else if (emailType === "RESET") {
//             await User.findByIdAndUpdate(userId, {
//                 $set: {
//                     forgotPasswordToken: hashedToken,
//                     forgotPasswordTokenExpiry: Date.now() + 3600000,
//                 },
//             });
//         }

//         // Looking to send emails in production? Check out our Email API/SMTP product!
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',  // or another service
//             auth: {
//               user: process.env.EMAIL_USER,
//               pass: process.env.EMAIL_PASS
//             }
//           });

//         const mailOptions = {
//             from: "Megalith 2025",
//             to: email,
//             subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
//             html: `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
//           }
//           const mailresponse = await transporter.sendMail(mailOptions);
//           return mailresponse;
        
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 throw new Error(error.message);
//             }
//         throw new Error('Something went wrong');
//     }
// }
