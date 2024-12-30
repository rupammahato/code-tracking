import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from '@/utils/verifyJWT'

// Add paths that should be protected
const protectedPaths = ['/dashboard', '/profile'];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Check if the path should be protected
    const isProtectedPath = protectedPaths.some(protectedPath => 
        path.startsWith(protectedPath)
    );

    if (isProtectedPath) {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            // Redirect to login if no token exists
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            // Verify the token
            const decoded = await verifyJWT(token);
            
            // Create a new headers object
            const requestHeaders = new Headers(request.headers);
            // Add the user ID to the request headers
            requestHeaders.set('x-user-id', decoded.userId);

            // Return the response with modified headers
            return NextResponse.next({
                request: {
                    headers: requestHeaders,
                },
            });
        } catch (error) {
            // Redirect to login if token is invalid
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

// Configure the paths that middleware should run on
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        // Add other protected routes here
    ]
}
