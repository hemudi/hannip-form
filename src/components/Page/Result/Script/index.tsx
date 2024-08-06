import { bookmarkScript } from '@api/script';
import Button from '@components/common/Button';
import ScriptCopyButton from '@components/common/Button/ScriptCopyButton';
import Icon from '@components/common/Icon';
import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import LoginModal from '@components/common/Modal/LoginModal';
import { ROUTING_PATH } from '@constants/routingPath';
import { useScriptState } from '@store/script';
import { getCookieToDocument } from '@utils/cookie/client';
import { getCookie } from '@utils/cookie/server';
import copyText from '@utils/copyText';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface ScriptProps {
  scriptText: string;
  title?: string;
}

const DEFAULT_TITLE_TEXT = '스크립트가 완성되었어요!';
const RETRY_TEXT = '대본이 마음에 안드세요? 다시하기';

const Script = ({ scriptText, title = DEFAULT_TITLE_TEXT }: ScriptProps) => {
  const { idea } = useScriptState();
  const [isChecked, setIsChecked] = useState(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOnClick = async () => {
    const token = await getCookieToDocument('token');
    if (!token) {
      setIsShow(true);
      return;
    }

    if (isChecked) {
      toast.success('이미 북마크 된 스크립트입니다');
      return;
    }
    bookmarkScript(`${scriptText}\n아이디어 : ${idea}`).then(() => {
      toast.success('스크립트가 북마크 되었습니다!');
      setIsChecked(true);
    });
  };
  return (
    <div className={`flex h-fit w-full flex-col justify-center gap-4 bg-script bg-cover p-4`}>
      <h4 className="w-full text-h4 font-bold">{`${title}`}</h4>
      <div className="flex h-fit w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
        {scriptText}
      </div>
      <Link
        className="w-full text-center text-footnote text-gray-600 hover:text-black"
        href={ROUTING_PATH.PLANNING}
      >
        {RETRY_TEXT}
      </Link>
      <div className="flex gap-2">
        <Button color="white" variant="colored" onClick={handleOnClick}>
          {'북마크'}
          <BookmarkIcon isChecked={isChecked} />
        </Button>
        <ScriptCopyButton text={scriptText} />
      </div>
      <LoginModal type={'스크립트'} isShow={isShow} clickModal={() => setIsShow((prev) => !prev)} />
    </div>
  );
};

export default Script;
