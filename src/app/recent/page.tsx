'use client';

import RecentCreationList from '@components/Page/Recent/RecentCreationList';
import { Suspense } from 'react';

const RecentPage = () => {
  return (
    <Suspense>
      <RecentCreationList />
    </Suspense>
  );
};

export default RecentPage;
