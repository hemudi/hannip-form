import ProfileImage from '@components/common/ProfileImage';

const NO_INFO = {
  TEXT: '로그인이 필요합니다',
  IMAGE_URL: '/assets/images/default_profile.svg',
};

const NoUserInfo = () => {
  return (
    <a
      href={`${process.env.NEXT_PUBLIC_API_FE_URL}/auth/kakao/callback`}
      className="flex w-full cursor-pointer select-none items-center justify-between p-4"
    >
      <div className="flex flex-col gap-2">
        <span className="text-h4 font-semibold text-black">{NO_INFO.TEXT}</span>
      </div>
      <ProfileImage src={NO_INFO.IMAGE_URL} alt="default thumbnail" />
    </a>
  );
};

export default NoUserInfo;
