import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  isSpacing?: boolean;
}

const Main = ({ children, isSpacing = true }: MainProps) => {
  return (
    <main
      className={`w-full flex-1 flex-grow justify-items-center overflow-y-auto bg-white scrollbar-hide ${isSpacing ? 'px-4 py-2' : ''}`}
    >
      {children}
    </main>
  );
};

export default Main;
