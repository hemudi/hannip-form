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
  const [{ scripts, ideas, ...userData }, setUserInfo] = useState<UserInfoData>({
    scripts: [],
    ideas: [],
    id: '',
    email: '',
    nickname: '',
    profileImageUrl: '',
  });

  useEffect(() => {
    getUser().then((data) => {
      setUserInfo(data);
    });
  }, []);

  return (
    <>
      <UserInfo {...userData} />
      <BookmarkList scripts={scripts} ideas={ideas} />
    </>
  );
};

export default MyPage;
