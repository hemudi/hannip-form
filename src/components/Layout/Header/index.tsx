import Menu, { HeaderMenu } from '@components/Layout/Header/Menu';

interface HeaderProps {
  leftMenu?: HeaderMenu;
  rightMenu: HeaderMenu;
}

const Header = ({ leftMenu, rightMenu }: HeaderProps) => {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white p-4">
      <div className="flex-1">
        <Menu type={leftMenu} />
      </div>
      <div>
        <Menu type={rightMenu} />
      </div>
    </header>
  );
};

export default Header;
