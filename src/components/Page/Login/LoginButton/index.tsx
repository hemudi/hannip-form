'use client';

import Icon from '@components/common/Icon';

interface LoginButtonProps {
  type: keyof typeof buttonSettings;
}

const buttonSettings = {
  kakao: {
    icon: <Icon className="mt-1.5" type="kakao" />,
    text: '카카오 로그인',
    styles: 'bg-kakao text-black',
    href: `${process.env.NEXT_PUBLIC_API_FE_URL}/auth/kakao/callback`,
  },
};

const LoginButton = ({ type }: LoginButtonProps) => {
  const { icon, text, styles, href } = buttonSettings[type];
  return (
    <a
      href={href}
      className={`flex h-12 w-full items-center justify-center gap-2 rounded-lg text-body1 disabled:bg-gray-100 disabled:text-gray-500 ${styles}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {text}
    </a>
  );
};

export default LoginButton;
