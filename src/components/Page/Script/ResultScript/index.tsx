import { bookmarkScript, deleteScript } from '@apis/script';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import { notify } from '@components/common/Toast';
import LoginModal from '@components/Page/Login/LoginModal';
import ImageDownloader from '@components/Page/Script/ImageDownloader';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useState } from 'react';

interface ScriptProps {
  scriptText: string;
  isRetry: boolean;
  onRetry: () => void;
}

const LOADING_SPINNER_PATH = '/assets/images/loading_spinner.svg';
const DEFAULT_TITLE_TEXT = '스크립트가 완성되었어요!';
const RETRY_TITLE_TEXT = '스크립트가 다시 구워지고 있어요!';
const RETRY_TEXT = '스크립트 다시 생성하기';

const ResultScript = ({ scriptText, onRetry, isRetry }: ScriptProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [bookmarkId, setBookmarkId] = useState<string | null>(null);

  const handleOnClick = async () => {
    const token = getCookie(COOKIE_NAME.ACCESS);

    if (!token) {
      setIsShow(true);
      return;
    }

    if (bookmarkId) {
      deleteScript(bookmarkId).then(() => {
        notify.success('스크립트의 북마크가 해제되었습니다!');
        setBookmarkId(null);
      });
      return;
    }

    bookmarkScript(scriptText).then(({ id }) => {
      notify.success('스크립트가 북마크 되었습니다!');
      setBookmarkId(id);
    });
  };

  return (
    <div className={`flex h-fit w-full flex-col justify-center gap-4 bg-script bg-cover p-4`}>
      <h4 className="w-full text-h4 font-bold">
        {isRetry ? RETRY_TITLE_TEXT : DEFAULT_TITLE_TEXT}
      </h4>
      <div className="flex h-fit w-full select-text items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
        {isRetry ? (
          <Image
            className="w-fit"
            width="0"
            height="0"
            alt="loading"
            src={LOADING_SPINNER_PATH}
            priority
          />
        ) : (
          scriptText
        )}
      </div>
      <button
        className="flex w-full items-center justify-center gap-1 text-center text-footnote text-gray-600 enabled:hover:text-black"
        onClick={() => {
          setBookmarkId(null);
          onRetry();
        }}
        disabled={isRetry}
      >
        {RETRY_TEXT}
        <Icon type="repeat" />
      </button>
      <div className="flex gap-2">
        <Button color="white" variant="colored" onClick={handleOnClick} disabled={isRetry}>
          {'북마크'}
          <BookmarkIcon isChecked={bookmarkId !== null} disabled={isRetry} />
        </Button>
        <ImageDownloader text={scriptText} disabled={isRetry} />
      </div>
      <LoginModal
        warningText={'스크립트를 북마크하려면'}
        isShow={isShow}
        clickModal={() => setIsShow((prev) => !prev)}
      />
    </div>
  );
};

export default ResultScript;
