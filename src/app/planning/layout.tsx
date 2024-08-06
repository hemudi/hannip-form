import Layout from '@components/Layout';
import Menu from '@components/Layout/Header/Menu';

const PlanningLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header leftMenu={<Menu type="prevPage" />} rightMenu={<Menu type="close" />} />
      {children}
    </>
  );
};

export default PlanningLayout;
