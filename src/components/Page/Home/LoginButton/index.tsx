'use client';

import { AUTH_URL_PATH } from '@apis/auth';
import Icon from '@components/common/Icon';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface LoginButtonProps {
  type: keyof typeof buttonSettings;
}

const buttonSettings = {
  kakao: {
    icon: <Icon className="mt-1.5" type="kakao" />,
    text: '카카오 로그인',
    styles: 'bg-kakao text-black',
    href: AUTH_URL_PATH.LOG_IN.KAKAO,
  },
  naver: {
    icon: <Icon className="mt-1.5" type="naver" color="#ffffff" />,
    text: '네이버 로그인',
    styles: 'bg-naver text-white',
    href: '/',
  },
};

const LoginButton = ({ type }: LoginButtonProps) => {
  const { icon, text, styles, href } = buttonSettings[type];
  return (
    <Link
      onClick={() => {
        if (type === 'naver') {
          toast.dismiss();
          toast.success('네이버 로그인 기능은 준비중입니다!');
        }
      }}
      href={href}
      className={`flex h-12 w-full items-center justify-center gap-2 rounded-lg text-body1 disabled:bg-gray-100 disabled:text-gray-500 ${styles}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {text}
    </Link>
  );
};

export default LoginButton;
