'use client';

import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/Page/MyPage/UserInfo';
import { Suspense } from 'react';

const BookmarkPage = () => {
  return (
    <div className="h-full w-full">
      <UserInfo />
      <Suspense>
        <BookmarkList />
      </Suspense>
    </div>
  );
};

export default BookmarkPage;
