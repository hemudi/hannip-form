import Loading from '@components/Layout/Loading';
import { ReactNode, Suspense } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Suspense fallback={<Loading title="로그인 중입니다" />}>{children}</Suspense>;
};

export default AuthLayout;
