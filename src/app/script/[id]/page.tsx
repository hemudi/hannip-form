'use client';

import { getScriptDetail } from '@apis/script';
import ScriptCopyButton from '@components/common/Button/ScriptCopyButton';

import { splitScriptAndIdeas } from '@utils/script';
import { useEffect, useState } from 'react';

const ScriptDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const [content, setContent] = useState<{ script: string; idea: string }>();

  useEffect(() => {
    getScriptDetail(id).then(({ content }) => {
      if (content && content !== '') {
        const { script, idea } = splitScriptAndIdeas(content);
        setContent({ script, idea: idea || '' });
      }
    });
  }, []);

  return (
    content && (
      <div className={`flex h-fit w-full flex-col items-center gap-4 bg-script p-4`}>
        <h4 className="w-full text-h4 font-bold">{`"${content.idea}"에 대한 대본이었어요!`}</h4>
        <div className="flex w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
          {content.script}
        </div>
        <div className="w-full">
          <ScriptCopyButton text={content.script} />
        </div>
      </div>
    )
  );
};

export default ScriptDetailPage;
