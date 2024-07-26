import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="w-full flex-grow justify-items-center overflow-y-scroll px-4 py-2">
      {children}
    </main>
  );
};

export default Main;
