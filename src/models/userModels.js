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
    mipId: {
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
    state: {
        type: String,
    },
    city: {
        type: String,
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
    isPaymentDone: {
        type: Boolean,
        default: false,
    },
    registrationType: {
        type: String,
        enum: ['Events', 'Workshops', 'Both'],
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;