import { ReactNode } from 'react';

interface BottomMenu {
  children: ReactNode;
}

const BottomMenu = ({ children }: BottomMenu) => {
  return <div className="h-fit w-full bg-white px-4 py-2">{children}</div>;
};

export default BottomMenu;
