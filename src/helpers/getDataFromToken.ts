import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

        return decodedToken.id;
    } catch (error: unknown) {
        throw new Error(error as string);
    }
}
