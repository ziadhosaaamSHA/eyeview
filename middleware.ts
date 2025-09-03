import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req) => {
  const headers = new Headers(req.headers);
  const xfh = headers.get('x-forwarded-host');
  const origin = headers.get('origin');
  const proto = headers.get('x-forwarded-proto') || 'https';

  // If proxied via Codespaces but client-origin is localhost, align them
  if (xfh && xfh.endsWith('.app.github.dev') && origin === 'http://localhost:3000') {
    headers.set('origin', `${proto}://${xfh}`);
    return NextResponse.next({ request: { headers } });
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};