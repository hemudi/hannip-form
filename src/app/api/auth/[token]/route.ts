import { NextResponse } from 'next/server';

export const GET = async (_: Request, { params: { token } }: { params: { token: string } }) => {
  try {
    const res = NextResponse.json({ message: '쿠키 생성 성공' }, { status: 200 });
    res.cookies.set('token', token, {
      secure: false,
      maxAge: 60 * 60 * 24,
      path: '/',
    });
    return res;
  } catch (error) {
    return NextResponse.json({ error: '쿠키 생성 실패' }, { status: 500 });
  }
};
