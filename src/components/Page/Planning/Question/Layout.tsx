import { ReactNode } from 'react';

interface QuestionLayoutProps {
  title: string;
  children: ReactNode;
}

export const QuestionLayout = ({ title, children }: QuestionLayoutProps) => {
  return (
    <div className="flex h-fit w-full flex-col gap-9 py-6">
      <h3 className="w-full text-h3 font-bold">{title}</h3>
      {children}
    </div>
  );
};

interface ItemLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ItemLayout = ({ title, children, className }: ItemLayoutProps) => {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <span className="w-full text-body1 font-bold text-gray-900">{title}</span>
      {children}
    </div>
  );
};
