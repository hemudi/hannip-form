import type { Metadata } from 'next';
import '@styles/globals.css';
import Layout from '@components/Layout';
import { ToastProvider } from '@components/common/Toast';
import 'react-toastify/dist/ReactToastify.min.css';
import { CookiesProvider } from 'next-client-cookies/server';

export const metadata: Metadata = {
  title: '한입폼',
  description: '한국 트렌드 맞춤형 숏폼 대본 생성 서비스',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto h-svh w-svw bg-primary-50">
        <ToastProvider />
        <CookiesProvider>
          <Layout>{children}</Layout>
        </CookiesProvider>
      </body>
    </html>
  );
}
