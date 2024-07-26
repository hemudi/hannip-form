import Layout from '@components/Layout';

const ResultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header leftMenu="home" rightMenu="myPage" />
      {children}
    </>
  );
};

export default ResultLayout;
