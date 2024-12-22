'use client';

import ProfileImage from '@components/common/ProfileImage';

export interface UserInfoData {
  nickname: string;
  email?: string;
  profileImageUrl: string;
}

const UserInfo = ({ nickname, email, profileImageUrl }: UserInfoData) => {
  return (
    <div className="flex w-full select-none items-center justify-between p-4">
      <div className="flex flex-col gap-2">
        <span className="text-h4 font-semibold text-black">{`${nickname}님`}</span>
        {email && <span className="text-body1 text-gray-700">{email}</span>}
      </div>
      <ProfileImage src={profileImageUrl} alt="thumbnail image" />
    </div>
  );
};

export default UserInfo;
