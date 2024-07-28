import Icon from '@components/common/Icon';
import { ReactNode, useState } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const ModalContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed left-2/4 top-2/4 z-50 flex h-full w-97 -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center gap-6 bg-black bg-opacity-40 p-5 text-black shadow">
      {children}
    </div>
  );
};

const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <ModalContainer>
      <div className="flex w-89 flex-col items-center justify-center gap-6 rounded-lg bg-white p-5 text-black shadow">
        <div className="flex w-full flex-col items-end gap-1">
          <div className="cursor-pointer" onClick={onClose}>
            <Icon type="closeCross" />
          </div>
          <div className="w-full whitespace-pre-line text-center text-h4 font-bold">{title}</div>
        </div>
        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
