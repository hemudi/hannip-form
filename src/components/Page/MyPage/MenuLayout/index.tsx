import Icon from '@components/common/Icon';
import Link from 'next/link';

export interface LinkMenu {
  name: string;
  href: string;
}

interface MenuLayoutProps {
  title: string;
  subMenus: LinkMenu[];
}

const MenuLayout = ({ title, subMenus }: MenuLayoutProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-5 p-5 text-body1">
      <div className="font-semibold">{title}</div>
      {subMenus.map(({ name, href }) => (
        <Link className="flex w-full justify-center" href={href}>
          <div className="w-full">{name}</div>
          <Icon size="medium" type="rightDirection" color="#A5A5A7" />
        </Link>
      ))}
    </div>
  );
};

export default MenuLayout;
