import Layout from '@components/Layout';
import Button from '@components/common/Button';
import { ROUTING_PATH } from '@constants/routingPath';
import { sessionRouter } from '@utils/getCookie';
import Link from 'next/link';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const MyPageLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  await sessionRouter(false, ROUTING_PATH.MAIN);
  return (
    <>
      <Layout.Header leftMenu="home" rightMenu="myPage" />
      <Layout.Main isSpacing={false}>{children}</Layout.Main>
      <Layout.BottomMenu>
        <Link href={ROUTING_PATH.PLANNING}>
          <Button>{BOTTOM_MENU_TEXT}</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default MyPageLayout;
