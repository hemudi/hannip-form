import { ReactNode } from 'react';

interface HeaderProps {
  leftMenu?: ReactNode;
  rightMenu?: ReactNode;
  title?: string;
}

const Header = ({ leftMenu, rightMenu, title }: HeaderProps) => {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white p-4">
      <div className="flex-1">{leftMenu}</div>
      {title && <h1 className="text-footnote">{title}</h1>}
      <div>{rightMenu}</div>
    </header>
  );
};

export default Header;
