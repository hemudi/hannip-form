import Layout from '@components/Layout';

const PlanningLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header leftMenu="prevPage" rightMenu="close" />
      {children}
    </>
  );
};

export default PlanningLayout;
