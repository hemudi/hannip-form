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
    href: `https://kauth.kakao.com/oauth/authorize?&response_type=code&client_id=c216663da6b37790543ac862f4ae05b7&redirect_uri=https://hannip-form.vercel.app/auth&state=kakao`,
    // href: `https://kauth.kakao.com/oauth/authorize?&response_type=code&client_id=c216663da6b37790543ac862f4ae05b7&redirect_uri=http://localhost:3001/auth&state=kakao`,
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
