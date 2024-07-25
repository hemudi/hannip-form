import Icon from '@components/common/Icon';
import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  controls: ReactNode;
}

const Modal = ({ title, controls }: ModalProps) => {
  return (
    <div className="flex w-89 flex-col items-center justify-center gap-6 rounded-lg p-5 text-black shadow">
      <div className="flex w-full flex-col items-end gap-1">
        <div className="cursor-pointer" onClick={() => {}}>
          <Icon type="closeCross" />
        </div>
        <div className="w-full text-center text-h4">{title}</div>
      </div>
      {controls}
    </div>
  );
};

export default Modal;
