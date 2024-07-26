import Layout from '@components/Layout';
import Script from '@components/Page/Result/Script';
import Button from '@components/common/Button';
import ContentList from '@components/common/ContentList';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';

const BOTTOM_MENU_TEXT = '새로운 스크립트 쓰러가기';

const scriptText =
  'Lorem ipsum dolor sit amet consectetur.\n\nSapien nullam facilisis pellentesque arcu et odio lacus ac. Sed dui consectetur morbi mauris erat.\nTincidunt consectetur mauris vitae varius purus mi ornare urna donec. Mattis tellus cras in lacus. Elementum tellus tempus dictumst vivamus.\n\nProin quis vehicula quam mauris vel sed odio. Sed quis quam sapien tempus commodo cras duis amet felis.\n\nNunc sed sit ut elit urna sit pellentesque pellentesque.';

const ideaList = [
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
  '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?',
];

const ResultPage = () => {
  return (
    <>
      <Layout.Main isSpacing={false}>
        {
          <>
            <Script scriptText={scriptText} />
            <ContentList contentList={ideaList} />
          </>
        }
      </Layout.Main>
      <Layout.BottomMenu>
        <Link href={ROUTING_PATH.PLANNING}>
          <Button>{BOTTOM_MENU_TEXT}</Button>
        </Link>
      </Layout.BottomMenu>
    </>
  );
};

export default ResultPage;
