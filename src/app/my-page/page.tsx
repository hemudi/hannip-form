'use client';

import { BookmarkContent, getUser } from '@apis/user';
import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/common/UserInfo';

import { useEffect, useState } from 'react';

interface UserInfoData {
  id: string;
  email: string;
  nickname: string;
  scripts: BookmarkContent[];
  ideas: BookmarkContent[];
  profileImageUrl: string;
}

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfoData>();

  useEffect(() => {
    getUser().then((data) => {
      setUserInfo(data);
    });
  }, []);

  return (
    userInfo && (
      <>
        <UserInfo
          nickname={userInfo.nickname}
          email={userInfo.email}
          profileImageUrl={userInfo.profileImageUrl}
        />
        <BookmarkList scripts={userInfo.scripts} ideas={userInfo.ideas} />
      </>
    )
  );
};

export default MyPage;
