import { ComponentPropsWithoutRef } from 'react';

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  variant?: keyof typeof variantStyle;
  helperText?: string;
  defaultValue?: string;
}

const variantStyle = {
  error: 'border-error bg-white',
  default: 'border-gray-50 bg-gray-50 ',
};

const TextArea = ({
  variant = 'default',
  helperText,
  defaultValue = '',
  ...props
}: TextAreaProps) => {
  return (
    <div className="flex h-fit w-full flex-col gap-1">
      <textarea
        className={`${variantStyle[variant]} box-border h-47 w-full resize-none rounded-lg border p-5 text-body1 text-black placeholder:text-gray-500 enabled:focus:border enabled:focus:border-gray-600 enabled:focus:bg-white enabled:focus:outline-none disabled:text-gray-500`}
        defaultValue={defaultValue}
        {...props}
      />
      {helperText && helperText != '' && (
        <span className="px-1 text-footnote text-error">{helperText}</span>
      )}
    </div>
  );
};

export default TextArea;
