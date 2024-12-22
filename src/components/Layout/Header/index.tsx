import { ReactNode } from 'react';

interface HeaderProps {
  leftMenu?: ReactNode;
  rightMenu?: ReactNode;
}

const Header = ({ leftMenu, rightMenu }: HeaderProps) => {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white p-4">
      <div className="flex-1">{leftMenu}</div>
      <div>{rightMenu}</div>
    </header>
  );
};

export default Header;
