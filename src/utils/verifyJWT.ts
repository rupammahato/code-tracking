import { jwtVerify, JWTPayload } from 'jose';  // Using jose instead of jsonwebtoken for Edge compatibility

// Extend JWTPayload to include our custom fields
interface CustomJWTPayload extends JWTPayload {
    userId: string;
}

export type DecodedToken = CustomJWTPayload;

export async function verifyJWT(token: string): Promise<DecodedToken> {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }

        const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secretKey);

        // Type check to ensure userId exists
        if (!payload || typeof payload.userId !== 'string') {
            throw new Error('Invalid token payload');
        }

        return payload as DecodedToken;
    } catch (error) {
        console.error('Token verification failed:', error);
        throw new Error('Invalid token');
    }
}
