import Icon from '@components/common/Icon';

interface LoginButtonProps {
  type: keyof typeof buttonSettings;
  onClick: () => void;
}

const buttonSettings = {
  kakao: {
    icon: <Icon type="kakao" />,
    text: '카카오 로그인',
    styles: 'bg-kakao',
    onClick: () => {},
  },
  naver: {
    icon: <Icon type="naver" />,
    text: '네이버 로그인',
    styles: 'bg-naver',
    onClick: () => {},
  },
};

const LoginButton = ({ type, onClick }: LoginButtonProps) => {
  const { icon, text, styles } = buttonSettings[type];
  return (
    <button
      className={`flex h-12 w-full items-center justify-center rounded-lg text-body1 text-black disabled:bg-gray-100 disabled:text-gray-500 ${styles}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {text}
    </button>
  );
};

export default LoginButton;
