import Layout from '@components/Layout';

const MyPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Main isSpacing={false}>{children}</Layout.Main>
      <Layout.GNB currentPath="my-page" />
    </>
  );
};

export default MyPageLayout;
