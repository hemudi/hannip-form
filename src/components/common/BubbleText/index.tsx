import { ReactNode } from 'react';

interface BubbleTextProps {
  children: ReactNode;
}

const BubbleText = ({ children }: BubbleTextProps) => {
  return (
    <div className="bubble shadow-bubble animate-bounce-slow mb-1 h-fit w-fit select-none px-4 py-2">
      <span className="w-fit text-footnote text-gray-700">{children}</span>
    </div>
  );
};

export default BubbleText;
