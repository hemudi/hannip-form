import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Modal from '@components/common/Modal';
import { tips } from '@components/common/TipBanner/constants';
import Image from 'next/image';
import { useState } from 'react';

const TIP_IMAGE = '/assets/images/tips.svg';

interface TipBannerProps {
  type: 'script' | 'channel';
}

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: TipBannerProps['type'];
}

const TipModal = ({ type, isOpen, onClose }: TipModalProps) => {
  return (
    isOpen && (
      <Modal className="max-h-full">
        <div className="w-full whitespace-pre-line text-h4 font-bold">{tips[type].subTitle}</div>
        <ul className="flex w-full flex-col gap-5 overflow-y-scroll overscroll-none p-1">
          {tips[type].data.map(({ title, content, example }, index) => (
            <li className="flex flex-col" key={index}>
              <span className="font-semibold">{title}</span>
              {content && <span className="px-3.5">{content}</span>}
              {example && <span className="px-3.5 text-gray-500">{example}</span>}
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

const TipBanner = ({ type }: TipBannerProps) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsShowModal(true)}
        className="flex w-full cursor-pointer bg-gray-50 p-5"
      >
        <div className="flex w-full flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="text-h4 font-semibold">{tips[type].title}</span>
            <Icon type="rightDirection" />
          </div>
          <span className="text-body2 text-gray-700">{tips[type].description}</span>
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
      <TipModal type={type} isOpen={isShowModal} onClose={() => setIsShowModal(false)} />
    </>
  );
};

export default TipBanner;
