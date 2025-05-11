import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',  // or another service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sender = {
  name: "Megalith 2025",
  email: process.env.EMAIL_USER
};

export default transporter;