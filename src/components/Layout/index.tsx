import BottomMenu from '@components/Layout/BottomMenu';
import Header from '@components/Layout/Header';
import Main from '@components/Layout/Main';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-97 flex-col bg-white shadow-xl">
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.BottomMenu = BottomMenu;

export default Layout;