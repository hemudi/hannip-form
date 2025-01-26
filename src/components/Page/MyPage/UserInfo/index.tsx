'use client';

import { getUser } from '@apis/user';
import ProfileImage from '@components/common/ProfileImage';
import NoUserInfo from '@components/Page/MyPage/UserInfo/NoUserInfo';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export interface UserInfoData {
  nickname: string;
  email?: string;
  profileImageUrl: string;
}

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoData>();

  useEffect(() => {
    getUser().then((data) => {
      setUserInfo(data);
    });
  }, []);

  return (
    <div className="flex min-h-28 w-full select-none items-center justify-between p-4">
      {userInfo && (
        <>
          <div className="flex flex-col gap-2">
            <span className="text-h4 font-semibold text-black">{`${userInfo.nickname}님`}</span>
            {userInfo.email && <span className="text-body1 text-gray-700">{userInfo.email}</span>}
          </div>
          <ProfileImage src={userInfo.profileImageUrl} alt="thumbnail image" />
        </>
      )}
    </div>
  );
};

export default UserInfo;
