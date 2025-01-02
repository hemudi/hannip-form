import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  isSpacing?: boolean;
  className?: string;
}

const Main = ({ children, isSpacing = true, className }: MainProps) => {
  return (
    <main
      className={`w-full flex-1 flex-grow justify-items-center overflow-y-auto scrollbar-hide ${isSpacing ? 'px-4 py-2' : ''} ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
