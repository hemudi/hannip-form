import type { Metadata } from 'next';
import '@styles/globals.css';
import Layout from '@components/Layout';

export const metadata: Metadata = {
  title: '한입폼',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto h-screen w-full bg-primary-50">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
