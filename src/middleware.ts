import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from '@/utils/verifyJWT'

// Add paths that should be protected
const protectedPaths = ['/dashboard', '/profile', '/admin-dashboard'];

// Add paths that authenticated users shouldn't access
const authPaths = ['/login', '/registration', '/forgot-password', '/reset-password'];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Get token from cookies
    const token = request.cookies.get('token')?.value;

    // Check if the path is an auth path (login, register, etc.)
    const isAuthPath = authPaths.some(authPath => 
        path.startsWith(authPath)
    );

    if (isAuthPath && token) {
        try {
            // Verify the token
            await verifyJWT(token);
            // If token is valid, redirect to home page
            return NextResponse.redirect(new URL('/', request.url));
        } catch (error) {
            // If token is invalid, allow access to auth pages
            return NextResponse.next();
        }
    }

    // Check if the path should be protected
    const isProtectedPath = protectedPaths.some(protectedPath => 
        path.startsWith(protectedPath)
    );

    if (isProtectedPath) {
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
        '/admin-dashboard/:path*',
        '/login',
        '/registration',
        '/forgot-password',
        '/reset-password/:path*'
    ]
}
