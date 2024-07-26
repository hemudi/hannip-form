import BottomMenu from '@components/Layout/BottomMenu';
import Header from '@components/Layout/Header';
import Main from '@components/Layout/Main';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="max-w-97 mx-auto flex h-full w-full flex-col bg-white">{children}</div>;
};

Layout.Header = Header;
Layout.Main = Main;
Layout.BottomMenu = BottomMenu;

export default Layout;
