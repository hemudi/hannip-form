import Icon from '@components/common/Icon';
import Layout from '@components/Layout';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';

export default function IdeaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Layout.Header
        leftMenu={
          <Link href={ROUTING_PATH.MAIN}>
            <Icon type="leftDirection" />
          </Link>
        }
        title="아이디어 생성"
      />
      {children}
    </>
  );
}
