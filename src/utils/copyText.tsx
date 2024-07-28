import { toast } from 'react-toastify';

const HTTP_PROTOCOL = 'http:';

const copyText = async (text: string) => {
  const protocol = document.location.protocol;

  if (protocol === HTTP_PROTOCOL) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    try {
      document.execCommand('copy');
    } catch (err) {
      toast.dismiss();
      toast.success('스크립트 복사에 실패했습니다!');
    }
    textArea.setSelectionRange(0, 0);
    document.body.removeChild(textArea);
    toast.dismiss();
    toast.success('스크립트가 복사되었습니다!');
    return;
  }

  const canUseShareApi =
    typeof window !== 'undefined' &&
    window.navigator.canShare &&
    window.navigator.canShare({ text });

  if (!canUseShareApi) {
    await window.navigator.clipboard?.writeText(text);
    toast.dismiss();
    toast.success('스크립트가 복사되었습니다!');
    return;
  }

  window.navigator.share({
    text: text,
  });
  toast.dismiss();
  toast.success('스크립트가 복사되었습니다!');
};

export default copyText;
