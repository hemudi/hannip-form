import Link from 'next/link';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Layout from '@components/Layout';
import { ROUTING_PATH } from '@constants/routingPath';

const BookmarkLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header
        title="북마크"
        leftMenu={
          <Link href={ROUTING_PATH.MY_PAGE}>
            <Icon type="leftDirection" />
          </Link>
        }
      />
      <Layout.Main>{children}</Layout.Main>
      <Layout.BottomMenu>
        <Link className="w-full" href={ROUTING_PATH.SCRIPT}>
          <Button size="full">새로운 스크립트 쓰러가기</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default BookmarkLayout;
