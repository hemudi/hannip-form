import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ROUTING_PATH = {
  MAIN: '/',
  ONBOARDING: '/onboarding',
  PLANNING: '/planning',
  RESULT: '/result',
  MY_PAGE: '/my-page',
  NOT_FOUND: '/not-found',
  SCRIPT: '/script',
  // LOGIN_CALLBACK: '/auth',
};

const TOKEN_COOKIE_NAME = 'token';

const mainRouter = (request: NextRequest) => {
  const token = getCookie(TOKEN_COOKIE_NAME);
  if (token) {
    return NextResponse.redirect(new URL(ROUTING_PATH.ONBOARDING, request.url));
  }
  if (request.cookies.has(TOKEN_COOKIE_NAME)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.ONBOARDING, request.url));
  }

  return NextResponse.next();
};

// const callbackRouter = (request: NextRequest) => {
//   const {
//     nextUrl: { searchParams },
//     cookies,
//   } = request;

//   const code = searchParams.get('code');
//   console.log(code);

//   if (!code) return NextResponse.redirect(new URL(ROUTING_PATH.NOT_FOUND, request.url));

//   if (cookies.has(TOKEN_COOKIE_NAME)) {
//     cookies.delete(TOKEN_COOKIE_NAME);
//   }

//   const response = NextResponse.redirect(new URL(ROUTING_PATH.ONBOARDING, request.url));
//   response.cookies.set(TOKEN_COOKIE_NAME, code, {
//     secure: false,
//     maxAge: 60 * 60 * 24,
//     path: '/',
//   });
//   return response;
// };

const resultRouter = (request: NextRequest) => {
  const response = NextResponse.next();
  return response;
};

const myPageRouter = (request: NextRequest) => {
  if (!request.cookies.has(TOKEN_COOKIE_NAME)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.MAIN, request.url));
  }

  return NextResponse.next();
};

const scriptRouter = (request: NextRequest) => {
  if (!request.cookies.has(TOKEN_COOKIE_NAME)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.MAIN, request.url));
  }

  return NextResponse.next();
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (pathname === ROUTING_PATH.MAIN) {
    return mainRouter(request);
  }

  // if (pathname.startsWith(ROUTING_PATH.LOGIN_CALLBACK)) {
  //   return callbackRouter(request);
  // }

  if (pathname.startsWith(ROUTING_PATH.RESULT)) {
    return resultRouter(request);
  }

  if (pathname.startsWith(ROUTING_PATH.MY_PAGE)) {
    return myPageRouter(request);
  }

  if (pathname.startsWith(ROUTING_PATH.SCRIPT)) {
    return scriptRouter(request);
  }

  return response;
}

export const config = {
  matcher: ['/', '/onboarding', '/planning', '/result', '/my-page'],
  // matcher: ['/', '/onboarding', '/planning', '/result', '/my-page', '/auth'],
};
