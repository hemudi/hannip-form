import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

const Button = ({
  variant = 'colored',
  color = 'black',
  size = 'full',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`h-12 rounded-lg disabled:bg-gray-100 disabled:text-gray-500 ${sizeStyles[size]} ${colorStyles[color][variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

const sizeStyles = {
  small: 'w-43',
  medium: 'w-89',
  full: 'w-full',
} as const;

const colorStyles = {
  primary: {
    colored:
      'bg-primary-500 text-white enabled:hover:bg-primary-400 enabled:active:bg-primary-500 disabled:border-gray-100',
    line: 'bg-white text-primary-500 border border-primary-500 enabled:hover:bg-primary-100 enabled:active:bg-primary-500 disabled:border-gray-300',
  },
  black: {
    colored:
      'bg-gray-900 text-white enabled:hover:bg-gray-800 enabled:active:bg-gray-900 disabled:border-gray-100',
    line: 'bg-white text-gray-900 border border-gray-100 enabled:hover:text-gray-700 enabled:active:text-gray-900 disabled:border-gray-300',
  },
} as const;

type ButtonColor = keyof typeof colorStyles;
type ButtonVariant = keyof (typeof colorStyles)[ButtonColor];
type ButtonSize = keyof typeof sizeStyles;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export default Button;
