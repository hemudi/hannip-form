import { ReactNode } from 'react';

interface BottomMenu {
  children: ReactNode;
}

const BottomMenu = ({ children }: BottomMenu) => {
  return (
    <div className="flex h-fit w-full items-center justify-center gap-2 bg-white px-4 pb-8 pt-2">
      {children}
    </div>
  );
};

export default BottomMenu;
