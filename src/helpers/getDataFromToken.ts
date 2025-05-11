import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';

        if (!token) {
            throw new Error("No token found");
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        return decodedToken.userId;
    } catch (error: unknown) {
        throw error;
    }
}
