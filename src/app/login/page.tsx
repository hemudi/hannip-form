import Layout from '@components/Layout';
import LoginButton from '@components/Page/Home/LoginButton';
import BubbleText from '@components/common/BubbleText';
import { ROUTING_PATH } from '@constants/routingPath';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_IMAGE_URL = '/assets/images/logo.svg';
const MAIN_IMAGE_URL = '/assets/images/main.svg';
const MAIN_TITLE_TEXT = '한국 트렌드 맞춤형 숏폼 대본 생성서비스';
const LOGIN_INFO_TEXT = '로그인 시 숏폼 대본과 아이디어를 저장하실 수 있어요!';
const NO_LOGIN_TEXT = '로그인없이 바로 시작하기';

const LoginPage = () => {
  return (
    <>
      <Layout.Main>
        <div className="flex h-fit w-full select-none flex-col items-center justify-center gap-14 py-8">
          <div className="flex h-fit w-full flex-col gap-9">
            <div className="flex h-fit w-full flex-col items-center gap-2">
              <span className="h-fit whitespace-pre-line text-center text-body2 text-gray-500">
                {MAIN_TITLE_TEXT}
              </span>
              <Image
                className="h-full max-h-17 w-auto max-w-48"
                width="0"
                height="0"
                alt="hannip_main"
                src={LOGO_IMAGE_URL}
                priority
              />
            </div>
            <Image
              className="h-full max-h-89 w-auto max-w-89"
              width="0"
              height="0"
              alt="hannip_main"
              src={MAIN_IMAGE_URL}
              priority
            />
          </div>
          <div className="flex h-fit w-full flex-col items-center gap-2">
            <BubbleText>{LOGIN_INFO_TEXT}</BubbleText>
            <div className="flex h-fit w-full flex-col gap-2">
              <LoginButton type="kakao" />
            </div>
            <Link
              className="text-700 whitespace-pre-line text-center text-body2 text-gray-700 underline underline-offset-2"
              href={ROUTING_PATH.ONBOARDING}
            >
              {NO_LOGIN_TEXT}
            </Link>
          </div>
        </div>
      </Layout.Main>
    </>
  );
};

export default LoginPage;
