import Layout from '@components/Layout';
import Menu from '@components/Layout/Header/Menu';

import Button from '@components/common/Button';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const MyPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header leftMenu={<Menu type="home" />} rightMenu={<Menu type="setting" />} />
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
