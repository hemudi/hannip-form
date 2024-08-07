import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../assets/fonts/Pretendard/woff2/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/Pretendard/woff2/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/Pretendard/woff2/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});
