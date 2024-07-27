import { toast } from 'react-toastify';

const copyText = async (text: string) => {
  const canUseShareApi =
    typeof window !== 'undefined' &&
    window.navigator.canShare &&
    window.navigator.canShare({ text });

  if (!canUseShareApi) {
    await window.navigator.clipboard.writeText(text);
    toast.success('스크립트가 복사되었습니다!');
    return;
  }

  const data = {
    text: text,
  };
  void window.navigator.share(data);
};

export default copyText;
