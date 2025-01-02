import Icon from '@components/common/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

const TITLE_TEXT = '한입폼의 서비스가\n마음에 드셨으면 공유해주세요';

const handleKakaoShare = async () => {
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '한입폼',
      description: '한국 트렌드 맞춤형 숏폼 대본 생성서비스',
      imageUrl: 'assets/images/main.png',
      link: {
        mobileWebUrl: 'https://hannip-form.vercel.app/',
        webUrl: 'https://hannip-form.vercel.app/',
      },
    },
  });
};

const ShareMenu = () => {
  const handleClickShareAPI = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator.share !== 'undefined') {
      e.preventDefault();
      window.navigator.share({
        title: '한입폼',
        text: '한국 트렌드 맞춤형 숏폼 대본 생성서비스',
        url: 'https://hannip-form.vercel.app/',
      });
      return;
    }
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center py-16">
      <Image
        className="h-full max-h-89 w-auto max-w-89"
        width="0"
        height="0"
        alt="image"
        src={'/assets/images/hannip.svg'}
        priority
      />
      <h4 className="whitespace-pre-line pt-2 text-center text-h4 font-bold">{TITLE_TEXT}</h4>
      <div className="flex h-fit w-full items-center justify-center gap-9 p-5">
        <div
          className="flex h-fit w-14 cursor-pointer flex-col items-center gap-2 text-gray-400 hover:text-black"
          onClick={handleKakaoShare}
        >
          <Icon type="linkKakao" size="large" />
          <span className="h-fit w-fit overflow-visible whitespace-nowrap text-footnote">
            카카오톡
          </span>
        </div>
        <Link
          href={'https://www.instagram.com/'}
          target="_black"
          className="flex h-fit w-14 flex-col items-center gap-2 text-gray-400 hover:text-black"
          onClick={handleClickShareAPI}
        >
          <Icon type="linkInstagram" size="large" />
          <span className="h-fit w-fit overflow-visible whitespace-nowrap text-footnote">
            인스타그램
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ShareMenu;
