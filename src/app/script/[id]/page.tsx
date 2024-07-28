import { getScriptDetail } from '@api/script';
import TextCopyButton from '@components/common/Button/TextCopyButton';
import { getCookie } from '@utils/cookie/server';

import { parseScript } from '@utils/script';

const ScriptDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const token = await getCookie('token');
  const { content } = await getScriptDetail(token, id);
  const { script, idea } = parseScript(content);

  return (
    <div className={`flex h-fit w-full flex-col items-center gap-4 bg-script p-4`}>
      <h4 className="w-full text-h4 font-bold">{`"${idea}"에 대한 대본이었어요!`}</h4>
      <div className="flex w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
        {script}
      </div>
      <div className="w-full">
        <TextCopyButton text={script} />
      </div>
    </div>
  );
};

export default ScriptDetailPage;
