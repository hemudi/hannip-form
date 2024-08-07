const HTTP_PROTOCOL = 'http:';

const copyDocumentText = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  try {
    document.execCommand('copy');
  } catch (err) {
    return false;
  }
  textArea.setSelectionRange(0, 0);
  document.body.removeChild(textArea);
  return true;
};

const copyShareApi = async (text: string) => {
  try {
    await window.navigator.clipboard?.writeText(text);
    return true;
  } catch (e) {
    return false;
  }
};

const copyText = async (text: string) => {
  const protocol = document.location.protocol;

  if (protocol === HTTP_PROTOCOL) {
    return copyDocumentText(text);
  }

  return await copyShareApi(text);
};

export default copyText;
