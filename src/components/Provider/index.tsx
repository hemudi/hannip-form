'use client';

import KakaoScript from '@components/common/KaKaoScript';
import { ToastProvider } from '@components/common/Toast';
import WebAnalytics from '@components/WebAnalytics';
import usePathHistory from '@hooks/usePathHistory';

const Provider = () => {
  usePathHistory();
  return (
    <>
      <WebAnalytics />
      <ToastProvider />
      <KakaoScript />
    </>
  );
};

export default Provider;
