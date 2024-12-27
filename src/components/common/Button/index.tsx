import { ComponentPropsWithoutRef } from 'react';

const Button = ({
  variant = 'colored',
  color = 'black',
  size = 'full',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`peer flex h-12 items-center justify-center gap-2 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 ${sizeStyles[size]} ${colorStyles[color][variant]} ${className}`}
      {...props}
    />
  );
};

const sizeStyles = {
  small: 'w-43',
  medium: 'w-89',
  full: 'w-full',
  fit: 'w-fit',
} as const;

const colorStyles = {
  primary: {
    colored:
      'bg-primary-500 text-white enabled:hover:bg-primary-400 enabled:active:bg-primary-500 disabled:border-gray-100',
    line: 'bg-white text-primary-500 border border-primary-500 enabled:hover:bg-primary-100 enabled:active:bg-primary-500 enabled:active:text-white disabled:border-gray-300',
  },
  black: {
    colored:
      'bg-gray-900 text-white enabled:hover:bg-gray-800 enabled:active:bg-gray-900 disabled:border-gray-100',
    line: 'bg-white text-gray-900 border border-gray-100 enabled:hover:text-gray-700 enabled:active:text-gray-900 disabled:border-gray-300',
  },
  white: {
    colored: 'bg-white text-black border border-gray-100',
    line: '',
  },
  disabled: {
    colored:
      'bg-gray-100 text-gray-500 border-gray-100 enabled:hover:bg-gray-300 enabled:active:bg-gray-200',
    line: '',
  },
} as const;

type ButtonColor = keyof typeof colorStyles;
type ButtonVariant = keyof (typeof colorStyles)[ButtonColor];
type ButtonSize = keyof typeof sizeStyles;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export default Button;
