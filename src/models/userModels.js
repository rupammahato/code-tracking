import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    megalithId: {
        type: String,
    },
    yearOfStudy: {
        type: String,
        required: true,
    },   
    phone: {
        type: String,
        required: true,
    },     
    college: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;