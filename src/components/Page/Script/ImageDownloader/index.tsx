'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import copyText from '@utils/copyText';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { toast } from 'react-toastify';

interface ImageDownloaderProps {
  text: string;
  disabled?: boolean;
}

const ImageDownloader = ({ text, disabled = false }: ImageDownloaderProps) => {
  const imageRef = useRef(null);

  const handleOnCapture = () => {
    const imageElement = imageRef.current;
    if (!imageElement) return;
    html2canvas(imageElement, { useCORS: true }).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'hannip-form-script-image.png';
      link.click();
    });
  };

  // const handleOnClick = () => {
  //   copyText(text).then((isSuccess) => {
  //     isSuccess && toast.success('이미지가 저장되었습니다!');
  //   });
  // };
  return (
    <>
      <Button onClick={handleOnCapture} disabled={disabled}>
        {'이미지 저장'}
        <Icon type="download" color="#FFFFFF" />
      </Button>
      <div
        ref={imageRef}
        className="absolute -left-[9999px] flex h-fit w-97 flex-col items-center justify-center gap-4 bg-script p-4"
      >
        <h4 className="w-full text-h4 font-bold">{'스크립트가 완성되었어요!'}</h4>
        <div className="flex h-fit w-full items-center justify-center whitespace-pre-line rounded-lg bg-white p-4">
          {text}
        </div>
      </div>
    </>
  );
};

export default ImageDownloader;
