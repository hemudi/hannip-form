'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import copyText from '@utils/copyText';
import Image from 'next/image';
import { toast } from 'react-toastify';

const scriptText =
  'Lorem ipsum dolor sit amet consectetur.\n\nSapien nullam facilisis pellentesque arcu et odio lacus ac. Sed dui consectetur morbi mauris erat.\nTincidunt consectetur mauris vitae varius purus mi ornare urna donec. Mattis tellus cras in lacus. Elementum tellus tempus dictumst vivamus.\n\nProin quis vehicula quam mauris vel sed odio. Sed quis quam sapien tempus commodo cras duis amet felis.\n\nNunc sed sit ut elit urna sit pellentesque pellentesque.';

const idea = '파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?';

const ScriptDetailPage = () => {
  return (
    <div className={`bg-script flex h-full w-full flex-col justify-center gap-4 bg-cover p-4`}>
      <h4 className="w-full text-h4 font-bold">{`${idea} 에 대한 대본이었어요!`}</h4>
      <div className="flex w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
        {scriptText}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => copyText(scriptText)}>
          {'스크립트 복사'}
          <Icon type="copy" color="#FFFFFF" />
        </Button>
      </div>
    </div>
  );
};

export default ScriptDetailPage;
