'use client';

import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import copyText from '@utils/copyText';

interface TextCopyButtonProps {
  text: string;
}

const TextCopyButton = ({ text }: TextCopyButtonProps) => {
  return (
    <Button onClick={() => copyText(text)}>
      {'스크립트 복사'}
      <Icon type="copy" color="#FFFFFF" />
    </Button>
  );
};

export default TextCopyButton;
