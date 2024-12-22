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
  if (!isVisited(request)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.ONBOARDING, request.url));
  }

  return NextResponse.next();
};

const loginRouter = (request: NextRequest) => {
  if (isLogIn(request)) {
    return NextResponse.redirect(new URL(ROUTING_PATH.MAIN, request.url));
  }

  return NextResponse.next();
};

const onboardingRouter = (request: NextRequest) => {
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME.VISITED, 'true');

  return response;
};

const channelInfoRouter = (request: NextRequest) => {
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME.VISITED, 'true');

  return response;
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === ROUTING_PATH.MAIN) {
    return mainRouter(request);
  }

  if (pathname === ROUTING_PATH.LOGIN) {
    return loginRouter(request);
  }

  if (pathname === ROUTING_PATH.ONBOARDING) {
    return onboardingRouter(request);
  }

  if (pathname === ROUTING_PATH.CHANNEL_INFO) {
    return channelInfoRouter(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/onboarding', '/planning', '/result', '/login', '/channel-info'],
};
