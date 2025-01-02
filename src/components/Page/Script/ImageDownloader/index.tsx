'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import copyText from '@utils/copyText';
import { toast } from 'react-toastify';

interface ImageDownloaderProps {
  text: string;
  disabled?: boolean;
}

const ImageDownloader = ({ text, disabled = false }: ImageDownloaderProps) => {
  const handleOnClick = () => {
    copyText(text).then((isSuccess) => {
      isSuccess && toast.success('이미지가 저장되었습니다!');
    });
  };
  return (
    <Button onClick={handleOnClick} disabled={disabled}>
      {'이미지 저장'}
      <Icon type="download" color="#FFFFFF" />
    </Button>
  );
};

export default ImageDownloader;
