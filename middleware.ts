
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session');

  // If the user is trying to access an admin page and doesn't have a session,
  // redirect them to the login page.
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If the user is on the login page and already has a session,
  // redirect them to the admin dashboard.
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
      if(session) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
