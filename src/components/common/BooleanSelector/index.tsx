import Button from '@components/common/Button';
import { useState } from 'react';

interface BooleanSelectorProps {
  onChange: (value: boolean) => void;
}

const BooleanSelector = ({ onChange }: BooleanSelectorProps) => {
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const handleOnClick = (value: boolean) => {
    if (onChange) onChange(value);
    setIsTrue(value);
  };

  return (
    <div className="flex w-full cursor-pointer gap-2">
      <Button onClick={() => handleOnClick(true)} color={isTrue ? 'black' : 'disabled'}>
        예
      </Button>
      <Button onClick={() => handleOnClick(false)} color={isTrue ? 'disabled' : 'black'}>
        아니오
      </Button>
    </div>
  );
};

export default BooleanSelector;
