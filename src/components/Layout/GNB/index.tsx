'use client';

import { MouseEvent, useState } from 'react';
import Icon, { IconType } from '@components/common/Icon';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { ROUTING_PATH } from '@constants/routingPath';
import LoginModal from '@components/Page/Login/LoginModal';

interface GNBProps {
  currentPath: 'home' | 'recent' | 'my-page';
}

interface NavigationMenu {
  path: 'home' | 'recent' | 'my-page';
  iconType: IconType;
  name: string;
}

const menus: NavigationMenu[] = [
  { path: 'home', iconType: 'home', name: '홈' },
  { path: 'recent', iconType: 'recent', name: '최근생성내역' },
  { path: 'my-page', iconType: 'user', name: '마이페이지' },
];

const GNB = ({ currentPath }: GNBProps) => {
  const handleMenuClick = (path: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (currentPath === path) {
      e.preventDefault();
      return;
    }
  };

  return (
    <>
      <div className="flex w-full">
        {menus.map(({ path, iconType, name }) => (
          <Link
            key={path}
            className={`flex h-full w-full flex-col items-center justify-center gap-2 text-footnote ${currentPath === path ? 'text-black' : 'text-gray-500'}`}
            onClick={handleMenuClick(path)}
            href={`/${path}`}
          >
            <Icon type={iconType} color={'inherit'} size="medium" />
            {name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default GNB;
