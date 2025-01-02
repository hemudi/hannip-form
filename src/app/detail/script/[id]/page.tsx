'use client';

import { deleteScript, getScriptDetail } from '@apis/script';
import Button from '@components/common/Button';
import ScriptCopyButton from '@components/common/Button/ScriptCopyButton';
import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import Modal from '@components/common/Modal';
import ImageDownloader from '@components/Page/Script/ImageDownloader';

import { splitScriptAndIdeas } from '@utils/script';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ScriptDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const [content, setContent] = useState<{ script: string; idea: string }>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    getScriptDetail(id).then(({ content }) => {
      if (content && content !== '') {
        const { script, idea } = splitScriptAndIdeas(content);
        setContent({ script, idea: idea || '' });
      }
    });
  }, []);

  const handleOnClick = () => {
    deleteScript(id).then(() => {
      toast.success('스크립트의 북마크가 해제되었습니다!');
      setIsShow(false);
      router.back();
    });
  };

  return (
    content && (
      <div className={`flex h-fit w-full flex-col items-center gap-4 p-4`}>
        <h4 className="w-full text-h4 font-bold">{`스크립트가 완성되었어요!`}</h4>
        <div className="flex w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
          {content.script}
        </div>
        <div className="flex w-full gap-2 pb-6">
          <Button color="white" variant="colored" onClick={() => setIsShow(true)}>
            {'북마크'}
            <BookmarkIcon isChecked={true} />
          </Button>
          <ImageDownloader text={content.script} />
        </div>
        {isShow && (
          <Modal title="삭제하시겠습니까?" onClose={() => setIsShow(false)}>
            <Button onClick={handleOnClick}>삭제하기</Button>
          </Modal>
        )}
      </div>
    )
  );
};

export default ScriptDetailPage;
