import Icon from '@components/common/Icon';
import { ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`flex w-full select-none flex-col rounded-lg bg-white px-4 py-5 ${isOpen ? 'gap-6' : ''}`}
    >
      <div className="flex w-full justify-between" onClick={handleOnClick}>
        <span className="text-body1 font-medium">{title}</span>
        <Icon type={isOpen ? 'downDirection' : 'upDirection'} color="#A5A5A7" />
      </div>
      {isOpen && children}
    </div>
  );
};

export default Accordion;
