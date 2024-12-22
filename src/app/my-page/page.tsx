'use client';

import Icon from '@components/common/Icon';
import MenuLayout from '@components/Page/MyPage/MenuLayout';
import { MY_PAGE_MENUS } from '@components/Page/MyPage/MenuLayout/constants';
import UserInfo, { UserInfoData } from '@components/Page/MyPage/UserInfo';
import { ROUTING_PATH } from '@constants/routingPath';
import LoginModal from '@components/Page/Login/LoginModal';
import Link from 'next/link';
import { MouseEvent, useEffect, useState } from 'react';
import { deleteCookie, getCookie } from 'cookies-next';
import { COOKIE_NAME } from '@constants/cookieName';
import { useRouter } from 'next/navigation';
import { deleteUser, getUser } from '@apis/user';
import { toast } from 'react-toastify';
import Modal from '@components/common/Modal';
import Button from '@components/common/Button';
import NoUserInfo from '@components/Page/MyPage/UserInfo/NoUserInfo';

const manageUserMenu = {
  title: '계정 관련',
  subMenus: [{ type: '로그아웃' }, { type: '회원탈퇴' }],
  isPrivate: false,
};

interface UserModalState {
  isModalShow: boolean;
  type: string;
}

const MyPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [warningText, setWarningText] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfoData>();
  const [{ type, isModalShow }, setModalState] = useState<UserModalState>({
    type: '로그아웃',
    isModalShow: false,
  });

  const isLogin = getCookie(COOKIE_NAME.ACCESS);
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      getUser().then((data) => {
        setUserInfo(data);
      });
    }
  }, []);

  const clickModal = (type: string) =>
    setModalState(({ isModalShow }) => ({ type, isModalShow: !isModalShow }));

  const handleLogout = async () => {
    deleteCookie(COOKIE_NAME.ACCESS);
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

  const handleRequireLogin = (warningText: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isLogin) {
      setIsShow(true);
      setWarningText(warningText);
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="h-full w-full pt-10">
      {isLogin ? userInfo && <UserInfo {...userInfo} /> : <NoUserInfo />}
      <div className="h-full w-full bg-gray-50">
        <Link
          onClick={handleRequireLogin('채널정보는')}
          className="flex w-full p-5"
          href={ROUTING_PATH.CHANNEL_INFO}
        >
          <div className="flex w-full flex-col justify-center">
            <span className="text-h4 font-semibold">내 채널 정보</span>
            <span>채널 정보 수정 및 관리할 수 있어요</span>
          </div>
          <Icon type="rightDirection" />
        </Link>
        <div className="flex w-full flex-col gap-2">
          {MY_PAGE_MENUS.map(({ title, subMenus, isPrivate }) => (
            <MenuLayout
              title={title}
              subMenus={subMenus}
              key={title}
              onClick={isPrivate ? handleRequireLogin(`${title}는`) : undefined}
            />
          ))}
          {isLogin && (
            <div className="flex w-full cursor-pointer flex-col justify-center gap-5 bg-white p-5 text-body1">
              <div className="font-semibold text-black">{manageUserMenu.title}</div>
              {manageUserMenu.subMenus.map(({ type }) => (
                <div
                  className={`flex w-full justify-center text-gray-300`}
                  onClick={() => clickModal(type)}
                  key={type}
                >
                  <div className={`w-full text-gray-300`}>{type}</div>
                  <Icon size="medium" type="rightDirection" color="inherit" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <LoginModal
        isShow={isShow}
        warningText={warningText}
        clickModal={() => setIsShow((prev) => !prev)}
      />
      {isModalShow && (
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
    </div>
  );
};

export default MyPage;
