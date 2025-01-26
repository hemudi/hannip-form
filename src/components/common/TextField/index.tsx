import { ChangeEvent, FocusEvent, ComponentPropsWithoutRef, useState, useEffect } from 'react';

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  variant?: keyof typeof variantStyle;
  helperMsg?: string;
  errorMsg?: string;
  defaultValue?: string;
  validateValue?: (value: string) => boolean;
}

const variantStyle = {
  error: 'border-error bg-white enabled:focus:border-error',
  default: 'border-gray-100 bg-white enabled:focus:border-gray-600',
};

const TextField = ({
  variant = 'default',
  defaultValue = '',
  helperMsg,
  errorMsg,
  onChange,
  validateValue,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (value !== defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleOnBlur = () => {
    if (validateValue) {
      setIsError(!validateValue(value));
    }
  };

  const handleOnFocus = () => {
    setIsError(false);
  };

  return (
    <div className="flex h-fit w-full flex-col gap-1">
      <input
        className={`${isError ? variantStyle.error : variantStyle.default} box-border h-12 w-full rounded-lg border px-4 text-body1 text-black placeholder:text-gray-500 enabled:focus:border enabled:focus:bg-white enabled:focus:outline-none disabled:text-gray-500`}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        {...props}
      />
      <span className={`px-1 text-footnote ${isError ? 'text-error' : 'text-gray-500'}`}>
        {isError ? errorMsg : helperMsg}
      </span>
    </div>
  );
};

export default TextField;
