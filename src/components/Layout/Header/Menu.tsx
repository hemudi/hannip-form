import Icon from '@components/common/Icon';
import Link from 'next/link';
import { ROUTING_PATH } from '@constants/routingPath';

const Home = () => (
  <Link href={ROUTING_PATH.ONBOARDING}>
    <Icon type="home" />
  </Link>
);

const MyPage = () => (
  <Link href={ROUTING_PATH.MY_PAGE}>
    <Icon type="user" />
  </Link>
);

const Setting = () => (
  <div className="cursor-pointer">
    <Icon type="gear" />
  </div>
);

const PrevPage = () => (
  <Link href={'/'}>
    <Icon type="leftDirection" />
  </Link>
);

const Close = () => (
  <Link href={'/'}>
    <Icon type="closeCross" />
  </Link>
);

const menus = {
  home: Home,
  myPage: MyPage,
  setting: Setting,
  prevPage: PrevPage,
  close: Close,
};

export type HeaderMenu = keyof typeof menus;

interface MenuProps {
  type?: HeaderMenu;
}

const Menu = ({ type }: MenuProps) => {
  const MenuComponent = type ? menus[type] : null;
  return MenuComponent && <MenuComponent />;
};

export default Menu;
