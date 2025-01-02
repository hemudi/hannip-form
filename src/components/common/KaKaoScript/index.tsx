'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KAKAO_SCRIPT_URL = 'https://developers.kakao.com/sdk/js/kakao.js';
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;

const KakaoScript = () => {
  const onLoad = () => {
    window.Kakao.init(KAKAO_API_KEY);
  };

  return <Script src={KAKAO_SCRIPT_URL} async onLoad={onLoad} />;
};

export default KakaoScript;
