'use client';

import TabBar from '@components/common/TabBar';
import { ROUTING_PATH } from '@constants/routingPath';
import { useRouter, useSearchParams } from 'next/navigation';

const EmptyMessage = ({ label }: { label: string }) => (
  <div className="flex h-96 w-full flex-col items-center justify-center text-body1 text-gray-700">
    <span>{`앗! 아직 생성된 ${label}가 없어요!`}</span>
    <span>{`${label}를 만들러 가볼까요?`}</span>
  </div>
);

interface RecentCreationContent {
  type: 'script' | 'idea';
}

const RecentCreationContent = ({ type }: RecentCreationContent) => {
  return <EmptyMessage label={type === 'script' ? '스크립트' : '아이디어'} />;
};

const RecentCreationList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 0;

  const handleOnChangeTab = (index: number) => {
    router.push(`${ROUTING_PATH.RECENT}/?type=${index}`);
  };

  return (
    <TabBar
      defaultTab={+type}
      onChange={handleOnChangeTab}
      tabs={[
        {
          label: '스크립트',
          content: <RecentCreationContent type="script" />,
        },
        {
          label: '아이디어',
          content: <RecentCreationContent type="idea" />,
        },
      ]}
    />
  );
};

export default RecentCreationList;
