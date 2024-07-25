import ProfileImage from '@components/common/ProfileImage';

interface UserInfoProps {
  nickname: string;
  email: string;
  profileImageUrl: string;
}

const UserInfo = ({ nickname, email, profileImageUrl }: UserInfoProps) => {
  return (
    <div className="w-97 flex items-center justify-between p-4">
      <div className="flex flex-col gap-2">
        <span className="text-h4 text-black">{`${nickname}님`}</span>
        <span className="text-body1 text-gray-700">{email}</span>
      </div>
      <ProfileImage src={profileImageUrl} alt="thumbnail image" />
    </div>
  );
};

export default UserInfo;
