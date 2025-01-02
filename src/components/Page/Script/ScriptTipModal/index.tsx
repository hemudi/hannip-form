import { scriptTips } from '@app/script/constants';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

interface ScriptTipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScriptTipModal = ({ isOpen, onClose }: ScriptTipModalProps) => {
  return (
    isOpen && (
      <Modal className="h-full">
        <div className="w-full whitespace-pre-line text-h4 font-bold">
          원하는 답변을 받을 수 있는 꿀팁!
        </div>
        <ul className="flex w-full flex-col gap-5 overflow-y-scroll overscroll-none p-1">
          {scriptTips.map(({ title, content, example }, index) => (
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

export default ScriptTipModal;
