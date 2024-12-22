import { COOKIE_NAME } from '@constants/cookieName';
import { ROUTING_PATH } from '@constants/routingPath';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isLogIn = (request: NextRequest) => {
  const token = request.cookies.has(COOKIE_NAME.ACCESS);
  return token;
};

const isVisited = (request: NextRequest) => {
  const visitedToken = request.cookies.has(COOKIE_NAME.VISITED);
  return visitedToken;
};

const mainRouter = (request: NextRequest) => {
  if (isLogIn(request)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.MAIN, request.url));
  }

  if (isVisited(request)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.LOGIN, request.url));
  }

  return NextResponse.redirect(new URL(ROUTING_PATH.ONBOARDING, request.url));
};

const onboardingRouter = (request: NextRequest) => {
  if (isLogIn(request)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.MAIN, request.url));
  }

  if (isVisited(request)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME.VISITED, 'true');

  return response;
};

const myPageRouter = (request: NextRequest) => {
  if (isLogIn(request)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(ROUTING_PATH.LOGIN, request.url));
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === ROUTING_PATH.MAIN) {
    return mainRouter(request);
  }

  if (pathname === ROUTING_PATH.ONBOARDING) {
    return onboardingRouter(request);
  }

  if (pathname.startsWith(ROUTING_PATH.MY_PAGE)) {
    return myPageRouter(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/onboarding', '/planning', '/result', '/my-page'],
};
