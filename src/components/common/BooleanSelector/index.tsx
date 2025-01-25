import Button from '@components/common/Button';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface BooleanSelectorProps {
  onChange: (value: boolean) => void;
}

export interface BooleanSelectorHandle {
  getValue: () => boolean;
  setValue: (value: boolean) => void;
}

const BooleanSelector = forwardRef<BooleanSelectorHandle, BooleanSelectorProps>(
  ({ onChange }: BooleanSelectorProps, ref) => {
    const [isTrue, setIsTrue] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      getValue: () => isTrue,
      setValue: (value: boolean) => {
        setIsTrue(value);
      },
    }));

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
  },
);

BooleanSelector.displayName = 'BooleanSelector';

export default BooleanSelector;
