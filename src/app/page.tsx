'use client';

import Layout from '@components/Layout';
import LoginButton from '@components/Page/Home/LoginButton';
import { ROUTING_PATH } from '@constants/routingPath';
import Image from 'next/image';
import Link from 'next/link';

const MAIN_IMAGE_URL = 'assets/images/main.svg';
const MAIN_TITLE_TEXT = '한입폼으로 만든 숏폼 스크립트로\n맛깔나는 숏폼을 한입에!';
const LOGIN_INFO_TEXT = '로그인 시 숏폼 아이디어를 저장하실 수 있어요!';
const NO_LOGIN_TEXT = '로그인없이 바로 시작하기';

export default function Home() {
  return (
    <Layout.Main>
      <div className="flex h-full w-full flex-col items-center justify-center gap-12">
        <div className="flex h-fit w-full flex-col gap-2">
          <h1 className="whitespace-pre-line text-center text-h3 font-bold">{MAIN_TITLE_TEXT}</h1>
          <Image
            className="max-w-89 max-h-89 h-full w-auto"
            width="0"
            height="0"
            alt="hannip_main"
            src={MAIN_IMAGE_URL}
          />
        </div>
        <div className="flex h-fit w-full flex-col gap-4">
          <span className="text-700 whitespace-pre-line text-center text-body1">
            {LOGIN_INFO_TEXT}
          </span>
          <div className="flex h-fit w-full flex-col gap-2">
            <LoginButton type="kakao" onClick={() => {}} />
            <LoginButton type="naver" onClick={() => {}} />
          </div>
          <Link
            className="text-700 whitespace-pre-line pt-2 text-center text-footnote text-gray-700 underline"
            href={ROUTING_PATH.ONBOARDING}
          >
            {NO_LOGIN_TEXT}
          </Link>
        </div>
      </div>
    </Layout.Main>
  );
}
