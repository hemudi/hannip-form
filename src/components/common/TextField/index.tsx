import { ComponentPropsWithoutRef } from 'react';

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  variant?: keyof typeof variantStyle;
  helperText?: string;
}

const variantStyle = {
  error: 'border-error bg-white',
  default: 'border-gray-50 bg-gray-50 ',
};

const TextField = ({ variant = 'default', helperText, ...props }: TextFieldProps) => {
  return (
    <div className="flex h-fit w-80 flex-col gap-1">
      <input
        className={`${variantStyle[variant]} box-border h-12 w-full rounded-lg border px-4 text-body1 text-black placeholder:text-gray-500 enabled:focus:border enabled:focus:border-gray-600 enabled:focus:bg-white enabled:focus:outline-none disabled:text-gray-500`}
        {...props}
      />
      {helperText && helperText != '' && (
        <span className="px-1 text-footnote text-error">{helperText}</span>
      )}
    </div>
  );
};

export default TextField;
