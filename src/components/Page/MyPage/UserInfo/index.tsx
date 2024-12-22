'use client';

import { getUser } from '@apis/user';
import ProfileImage from '@components/common/ProfileImage';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

interface UserInfoData {
  nickname: string;
  email?: string;
  profileImageUrl: string;
}

const NO_INFO = {
  TEXT: '로그인이 필요합니다',
  IMAGE_URL: '/assets/images/default_profile.svg',
};

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoData>();
  const isLogin = getCookie(COOKIE_NAME.ACCESS);

  useEffect(() => {
    if (isLogin) {
      getUser().then((data) => {
        setUserInfo(data);
      });
    }
  }, []);

  return isLogin ? (
    userInfo && (
      <div className="flex w-full select-none items-center justify-between p-4">
        <div className="flex flex-col gap-2">
          <span className="text-h4 font-semibold text-black">{`${userInfo.nickname}님`}</span>
          {userInfo.email && <span className="text-body1 text-gray-700">{userInfo.email}</span>}
        </div>
        <ProfileImage src={userInfo.profileImageUrl} alt="thumbnail image" />
      </div>
    )
  ) : (
    <div className="flex w-full select-none items-center justify-between p-4">
      <div className="flex flex-col gap-2">
        <span className="text-h4 font-semibold text-black">{NO_INFO.TEXT}</span>
      </div>
      <ProfileImage src={NO_INFO.IMAGE_URL} alt="default thumbnail" />
    </div>
  );
};

export default UserInfo;
