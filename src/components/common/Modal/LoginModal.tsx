import LoginButton from '@components/Page/Home/LoginButton';
import Modal from '@components/common/Modal';
import { useState } from 'react';

interface LoginModalProps {
  type: string;
  isShow: boolean;
  clickModal: () => void;
}

const LoginModal = ({ type, isShow, clickModal }: LoginModalProps) => {
  return (
    isShow && (
      <Modal title={`${type}를 북마크하려면\n로그인이 필요해요!`} onClose={clickModal}>
        <div className="flex h-fit w-full flex-col gap-2">
          <LoginButton type="kakao" />
          <LoginButton type="naver" />
        </div>
      </Modal>
    )
  );
};

export default LoginModal;
