import Link from 'next/link';
import Layout from '@components/Layout';
import Button from '@components/common/Button';
import { ROUTING_PATH } from '@constants/routingPath';

const BOTTOM_MENU_TEXT = '기획하러 가기';

const OnboardingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header leftMenu="prevPage" rightMenu="myPage" />
      <Layout.Main>{children}</Layout.Main>
      <Layout.BottomMenu>
        <Button>
          <Link href={ROUTING_PATH.PLANNING}>{BOTTOM_MENU_TEXT}</Link>
        </Button>
      </Layout.BottomMenu>
    </>
  );
};

export default OnboardingLayout;
