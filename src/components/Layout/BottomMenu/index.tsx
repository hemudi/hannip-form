import { ReactNode } from 'react';

interface BottomMenu {
  children: ReactNode;
  className?: string;
}

const BottomMenu = ({ children, className }: BottomMenu) => {
  return (
    <div
      className={`flex h-fit w-full items-center justify-center gap-2 px-4 pb-8 pt-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default BottomMenu;
