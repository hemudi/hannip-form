import Icon from '@components/common/Icon';
import Link from 'next/link';

export interface LinkMenu {
  name: string;
  href: string;
  isHidden?: boolean;
}

interface MenuLayoutProps {
  title: string;
  subMenus: LinkMenu[];
}

const MenuLayout = ({ title, subMenus }: MenuLayoutProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-5 bg-white p-5 text-body1">
      <div className="font-semibold text-black">{title}</div>
      {subMenus.map((props) => (
        <MenuItem {...props} />
      ))}
    </div>
  );
};

export const MenuItem = ({ name, href, isHidden = false }: LinkMenu) => {
  return (
    <Link
      className={`flex w-full justify-center ${isHidden ? 'text-gray-300' : 'text-gray-500'}`}
      href={href}
    >
      <div className={`w-full ${isHidden ? 'text-gray-300' : 'text-black'}`}>{name}</div>
      <Icon size="medium" type="rightDirection" color="inherit" />
    </Link>
  );
};

export default MenuLayout;
