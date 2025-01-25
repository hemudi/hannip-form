import { ChangeEvent, FocusEvent, ComponentPropsWithoutRef, useState } from 'react';

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  variant?: keyof typeof variantStyle;
  helperMsg?: string;
  errorMsg?: string;
  defaultValue?: string;
  validateValue?: (value: string) => boolean;
}

const variantStyle = {
  error: 'border-error bg-white enabled:focus:border-error',
  default: 'border-gray-50 bg-gray-50 enabled:focus:border-gray-600',
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
  const [isError, setIsError] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (validateValue) {
      setIsError(!validateValue(e.target.value));
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
      {isError ? (
        <span className="px-1 text-footnote text-error">{errorMsg || helperMsg}</span>
      ) : (
        <span className="px-1 text-footnote text-gray-500">{helperMsg || errorMsg}</span>
      )}
    </div>
  );
};

export default TextField;
