import Button from '@components/common/Button';
import Layout from '@components/Layout';
import { ROUTING_PATH } from '@constants/routingPath';
import Image from 'next/image';
import Link from 'next/link';

const HOME_IMAGE_URL = '/assets/images/main.svg';
const HOME_TITLE_TEXT = `한입폼으로 만든 숏폼 스크립트로\n맛깔나는 숏폼을 한입에!`;
const BUTTON_TEXT_TO_IDEA = '아이디어 작성';
const BUTTON_TEXT_TO_SCRIPT = '스크립트 작성';

const Home = () => {
  return (
    <>
      <Layout.Main>
        <div className="flex w-full flex-col items-center gap-10 pt-10">
          <span className="whitespace-pre-line text-center text-h3 font-bold">
            {HOME_TITLE_TEXT}
          </span>
          <Image
            className="h-full max-h-89 w-auto max-w-89"
            width={358}
            height={358}
            alt="hannip_main"
            src={HOME_IMAGE_URL}
            priority
            loading="eager"
          />
        </div>
        <div className="flex h-fit w-full items-center justify-center gap-2 pt-10">
          <Link className="w-full" href={ROUTING_PATH.IDEA}>
            <Button size="full">{BUTTON_TEXT_TO_IDEA}</Button>
          </Link>
          <Link className="w-full" href={ROUTING_PATH.SCRIPT}>
            <Button size="full">{BUTTON_TEXT_TO_SCRIPT}</Button>
          </Link>
        </div>
        <div className="flex w-full justify-center gap-2 py-5">
          <a
            href="/assets/file/한입폼_개인정보처리방침.pdf"
            target="_blank"
            className="block text-center text-footnote text-gray-500 hover:text-black"
          >
            개인정보처리방침
          </a>
          <a
            href="/assets/file/한입폼_이용약관.pdf"
            target="_blank"
            className="block text-center text-footnote text-gray-500 hover:text-black"
          >
            서비스이용약관
          </a>
        </div>
      </Layout.Main>
      <Layout.GNB currentPath="home" />
    </>
  );
};

export default Home;
