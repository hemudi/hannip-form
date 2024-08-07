'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import copyText from '@utils/copyText';
import { toast } from 'react-toastify';

interface TextCopyButtonProps {
  text: string;
  disabled?: boolean;
}

const ScriptCopyButton = ({ text, disabled = false }: TextCopyButtonProps) => {
  const handleOnClick = () => {
    copyText(text).then((isSuccess) => {
      isSuccess && toast.success('스크립트가 복사되었습니다!');
    });
  };
  return (
    <Button onClick={handleOnClick} disabled={disabled}>
      {'스크립트 복사'}
      <Icon type="copy" color="#FFFFFF" />
    </Button>
  );
};

export default ScriptCopyButton;
