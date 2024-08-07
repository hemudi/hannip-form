import Icon from '@components/common/Icon';
import copyText from '@utils/copyText';
import detectDevice, { DEVICE_TYPE } from '@utils/detectDevice';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

const TITLE_TEXT = '한입폼의 스크립트로\n숏폼을 제작하러 가볼까요?';
const FOOTER_TEXT = '저희 서비스를 이용해주셔서 감사합니다.\n마음에 드셨다면?';

const SHARE = {
  TEXT: '공유하기',
  URL: 'https://hannip-form.vercel.app',
  SUCCESS_MESSAGE: '서비스 링크가 복사되었습니다!',
};

interface LinkData {
  title: string;
  iconType: 'linkNaver' | 'linkYoutube' | 'linkInstagram';
  href: string;
}

const linkData: LinkData[] = [
  { title: '네이버 클립', iconType: 'linkNaver', href: 'https://tv.naver.com/h' },
  { title: '유튜브 쇼츠', iconType: 'linkYoutube', href: 'https://studio.youtube.com/' },
  { title: '인스타그램 릴스', iconType: 'linkInstagram', href: 'https://www.instagram.com/reels/' },
];

const ShareMenu = () => {
  const handleClickShareText = async () => {
    copyText(SHARE.URL).then(() => {
      if (detectDevice() === DEVICE_TYPE.WEB) {
        toast.success(SHARE.SUCCESS_MESSAGE);
      }
    });
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center py-16">
      <Image
        className="h-full max-h-89 w-auto max-w-89"
        width="0"
        height="0"
        alt="image"
        src={'/assets/images/hannip.svg'}
      />
      <h4 className="whitespace-pre-line pt-2 text-center text-h4 font-bold">{TITLE_TEXT}</h4>
      <div className="flex h-fit w-full items-center justify-center gap-9 p-5">
        {linkData.map(({ title, iconType, href }) => (
          <Link
            key={title}
            href={href}
            target="_black"
            className="flex h-fit w-14 flex-col items-center gap-2 text-gray-400 hover:text-black"
          >
            <Icon type={iconType} size="large" />
            <span className="h-fit w-fit overflow-visible whitespace-nowrap text-footnote">
              {title}
            </span>
          </Link>
        ))}
      </div>
      <div className="whitespace-pre-line pt-2 text-center text-body2 text-gray-700">
        {FOOTER_TEXT}
        <span
          className="cursor-pointer pl-1 text-body2 text-gray-700 underline underline-offset-2 hover:text-black"
          onClick={handleClickShareText}
        >
          {SHARE.TEXT}
        </span>
      </div>
    </div>
  );
};

export default ShareMenu;
