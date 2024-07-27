import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface ScriptProps {
  scriptText: string;
  title?: string;
}

const DEFAULT_TITLE_TEXT = '스크립트가 완성되었어요!';
const RETRY_TEXT = '대본이 마음에 안드세요? 다시하기';

const Script = ({ scriptText, title = DEFAULT_TITLE_TEXT }: ScriptProps) => {
  return (
    <div className="flex h-fit w-full flex-col justify-center gap-4 bg-primary-50 p-4">
      <h4 className="w-full text-h4 font-bold">{title}</h4>
      <div className="flex w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
        {scriptText}
      </div>
      <Link
        className="w-full text-center text-footnote text-gray-600 hover:text-black"
        href={ROUTING_PATH.PLANNING}
      >
        {RETRY_TEXT}
      </Link>
      <div className="flex gap-2">
        <Button color="white" variant="colored">
          {'북마크'}
          <Icon type="bookmark" />
        </Button>
        <Button
          onClick={() => {
            toast.success('복사에 성공!');
          }}
        >
          {'스크립트 복사'}
          <Icon type="copy" color="#FFFFFF" />
        </Button>
      </div>
    </div>
  );
};

export default Script;
