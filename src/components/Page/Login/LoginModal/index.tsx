import Modal from '@components/common/Modal';
import LoginButton from '@components/Page/Login/LoginButton';

interface LoginModalProps {
  warningText: string;
  isShow: boolean;
  clickModal: () => void;
}

const LoginModal = ({ warningText, isShow, clickModal }: LoginModalProps) => {
  return (
    isShow && (
      <Modal title={`${warningText}\n로그인이 필요해요!`} onClose={clickModal}>
        <div className="flex h-fit w-full flex-col gap-2">
          <LoginButton type="kakao" />
        </div>
      </Modal>
    )
  );
};

export default LoginModal;
