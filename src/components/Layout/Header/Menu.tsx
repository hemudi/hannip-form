'use client';

import Icon from '@components/common/Icon';
import Link from 'next/link';
import { ROUTING_PATH } from '@constants/routingPath';
import { ReactNode, useState } from 'react';
import useToken from '@hooks/useToken';
import { deleteAccount, logout } from '@api/auth';

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

const Setting = () => {
  const { token, deleteToken, isLogin } = useToken();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    deleteToken();
  };

  const handleWithdraw = async () => {
    if (isLogin && token) {
      await deleteAccount(token);
      deleteToken();
    }
  };

  return (
    <div className="relative cursor-pointer select-none">
      <div onClick={toggleMenu}>
        <Icon type="gear" />
      </div>
      {isOpen && (
        <div className="shadow-around w-42 absolute right-0 z-10 mt-2 flex h-24 flex-col items-center justify-center overflow-hidden rounded-2xl border-gray-300 bg-white text-body1 font-medium text-black">
          <button
            onClick={handleLogout}
            className="block h-full w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100"
          >
            로그아웃
          </button>
          <button
            onClick={handleWithdraw}
            className="block h-full w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100"
          >
            회원탈퇴
          </button>
        </div>
      )}
    </div>
  );
};

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
  component?: ReactNode;
}

const Menu = ({ type, component }: MenuProps) => {
  const MenuComponent = type ? menus[type] : null;
  return component ? { component } : MenuComponent && <MenuComponent />;
};

export default Menu;
