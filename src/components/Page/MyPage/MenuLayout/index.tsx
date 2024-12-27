import Icon from '@components/common/Icon';
import Link from 'next/link';

import { MouseEvent } from 'react';

export interface LinkMenu {
  name: string;
  href: string;
}

interface MenuLayoutProps {
  title: string;
  subMenus: LinkMenu[];
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const MenuLayout = ({ title, subMenus, onClick }: MenuLayoutProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-5 bg-white p-5 text-body1">
      <div className="font-semibold text-black">{title}</div>
      {subMenus.map(({ name, href }) => (
        <Link
          key={name}
          className={`flex w-full justify-center text-gray-500`}
          href={href}
          onClick={onClick}
        >
          <div className={`w-full text-black`}>{name}</div>
          <Icon size="medium" type="rightDirection" color="inherit" />
        </Link>
      ))}
    </div>
  );
};

export default MenuLayout;
