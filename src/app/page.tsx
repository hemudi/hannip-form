import Layout from '@components/Layout';

const Home = () => {
  return (
    <>
      <Layout.Main>홈화면</Layout.Main>
      <Layout.BottomMenu>
        <Layout.GNB currentPath="home" />
      </Layout.BottomMenu>
    </>
  );
};

export default Home;
