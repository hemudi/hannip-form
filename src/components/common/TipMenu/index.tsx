import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import { tips } from '@components/common/TipMenu/constants';
import Image from 'next/image';
import { useState } from 'react';

const TIP_IMAGE = '/assets/images/tips.svg';

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TipModal = ({ isOpen, onClose }: TipModalProps) => {
  return (
    isOpen && (
      <Modal className="h-full">
        <div className="w-full whitespace-pre-line text-h4 font-bold">
          원하는 답변을 받을 수 있는 꿀팁!
        </div>
        <ul className="flex w-full flex-col gap-5 overflow-y-scroll overscroll-none p-1">
          {tips.map(({ title, content, example }, index) => (
            <li className="flex flex-col" key={index}>
              <span className="font-semibold">{title}</span>
              <span className="px-3.5">{content}</span>
              <span className="px-3.5 text-gray-500">{example}</span>
            </li>
          ))}
        </ul>
        <Button className="min-h-12" onClick={onClose}>
          확인
        </Button>
      </Modal>
    )
  );
};

const TipMenu = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsShowModal(true)}
        className="flex w-full cursor-pointer bg-gray-50 p-5"
      >
        <div className="flex w-full flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="text-h4 font-semibold">한입폼 100% 활용하기</span>
            <Icon type="rightDirection" />
          </div>
          <span className="text-body2 text-gray-700">
            이렇게 작성하면 정확한 답변을 받을 수 있어요
          </span>
        </div>
        <Image
          className="h-fit w-fit"
          width="0"
          height="0"
          alt="hannip_main"
          src={TIP_IMAGE}
          priority
        />
      </div>
      <TipModal isOpen={isShowModal} onClose={() => setIsShowModal(false)} />
    </>
  );
};

export default TipMenu;
