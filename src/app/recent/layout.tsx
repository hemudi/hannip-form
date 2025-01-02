import Layout from '@components/Layout';

const RecentPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header title="최근 생성 내역" />
      <Layout.Main>{children}</Layout.Main>
      <Layout.GNB currentPath="recent" />
    </>
  );
};

export default RecentPage;
