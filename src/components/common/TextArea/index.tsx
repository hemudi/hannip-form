import { ChangeEvent, ComponentPropsWithoutRef, useEffect, useState } from 'react';

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
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

const TextArea = ({
  helperMsg,
  errorMsg,
  defaultValue = '',
  validateValue,
  onChange,
  ...props
}: TextAreaProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleOnChangeWithValidation = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e);
    if (!validateValue) return;
    setIsError(!validateValue(e.target.value));
  };

  return (
    <div className="flex h-fit w-full flex-col gap-1">
      <textarea
        className={`${isError ? variantStyle.error : variantStyle.default} box-border h-47 w-full resize-none rounded-lg border p-5 text-body1 text-black placeholder:text-gray-500 enabled:focus:border enabled:focus:bg-white enabled:focus:outline-none disabled:text-gray-500`}
        defaultValue={defaultValue}
        onChange={handleOnChangeWithValidation}
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

export default TextArea;
