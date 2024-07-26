import Layout from '@components/Layout';

const ResultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Layout.Main>{children}</Layout.Main>;
};

export default ResultLayout;
