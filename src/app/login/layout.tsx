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
      <Layout.Main isSpacing={true}>{children}</Layout.Main>
    </>
  );
};

export default MyPageLayout;
