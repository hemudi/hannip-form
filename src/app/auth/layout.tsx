import Loading from '@components/Layout/Loading';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Loading title="로그인 중입니다" />
      {children}
    </>
  );
};

export default AuthLayout;
