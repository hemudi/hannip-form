'use client';

import Icon from '@components/common/Icon';
import Link from 'next/link';
import { ROUTING_PATH } from '@constants/routingPath';
import { ReactNode, useState } from 'react';
import Modal from '@components/common/Modal';
import Button from '@components/common/Button';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { deleteUser } from '@apis/user';
import { deleteCookie } from 'cookies-next';
import { COOKIE_NAME } from '@constants/cookieName';

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

interface ModalState {
  isShow: boolean;
  type: '로그아웃' | '회원탈퇴';
}

const Setting = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [{ type, isShow }, setModalState] = useState<ModalState>({
    type: '로그아웃',
    isShow: false,
  });

  const clickModal = (type: '로그아웃' | '회원탈퇴') =>
    setModalState(({ isShow }) => ({ type, isShow: !isShow }));

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    deleteCookie(COOKIE_NAME.ACCESS);
    clickModal('로그아웃');
    toast.success('정상적으로 로그아웃 되었습니다.');
    router.replace(ROUTING_PATH.MAIN);
  };

  const handleWithdraw = async () => {
    deleteUser().then(() => {
      deleteCookie(COOKIE_NAME.ACCESS);
      toast.success('회원탈퇴가 완료되었습니다! 다음에 또 만나요!');
      router.replace(ROUTING_PATH.MAIN);
    });
  };

  return (
    <>
      <div className="relative cursor-pointer select-none">
        <div onClick={toggleMenu}>
          <Icon type="gear" />
        </div>
        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 flex h-fit w-42 flex-col items-center justify-center overflow-hidden rounded-2xl border-gray-300 bg-white text-body1 font-medium text-black shadow-around">
            <button
              onClick={() => clickModal('로그아웃')}
              className="block h-full w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100"
            >
              로그아웃
            </button>
            <button
              onClick={() => clickModal('회원탈퇴')}
              className="block h-full w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100"
            >
              회원탈퇴
            </button>
            <a
              href="/assets/file/한입폼_개인정보처리방침.pdf"
              target="_blank"
              className="block h-full w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100"
            >
              개인정보처리방침
            </a>
            <a
              href="/assets/file/한입폼_이용약관.pdf"
              target="_blank"
              className="block h-full w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100"
            >
              이용 약관
            </a>
          </div>
        )}
      </div>
      {isShow && (
        <Modal
          title={
            type === '로그아웃'
              ? '로그아웃 하시겠습니까?'
              : '탈퇴하시면 모든 아이디어와\n스크립트가 사라져요.. \n그래도 탈퇴하시겠어요?'
          }
          onClose={() => clickModal(type)}
        >
          <div className="flex h-fit w-full gap-2">
            <Button onClick={() => clickModal(type)} variant="line">
              취소하기
            </Button>
            <Button onClick={type === '로그아웃' ? handleLogout : handleWithdraw}>{type}</Button>
          </div>
        </Modal>
      )}
    </>
  );
};

const PrevPage = () => (
  <Link href={'/'}>
    <Icon type="leftDirection" />
  </Link>
);

const Close = () => (
  <Link href={'/onboarding'}>
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
  if (component) return component;
  return MenuComponent && <MenuComponent />;
};

export default Menu;
