import { AUTH_URL_PATH } from '@api/auth';
import Icon from '@components/common/Icon';
import Link from 'next/link';

interface LoginButtonProps {
  type: keyof typeof buttonSettings;
}

const buttonSettings = {
  kakao: {
    icon: <Icon type="kakao" />,
    text: '카카오 로그인',
    styles: 'bg-kakao',
    href: AUTH_URL_PATH.LOG_IN.KAKAO,
  },
  naver: {
    icon: <Icon type="naver" />,
    text: '네이버 로그인',
    styles: 'bg-naver',
    href: AUTH_URL_PATH.LOG_IN.NAVER,
  },
};

const LoginButton = ({ type }: LoginButtonProps) => {
  const { icon, text, styles, href } = buttonSettings[type];
  return (
    <Link
      href={href}
      className={`flex h-12 w-full items-center justify-center rounded-lg text-body1 text-black disabled:bg-gray-100 disabled:text-gray-500 ${styles}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {text}
    </Link>
  );
};

export default LoginButton;
