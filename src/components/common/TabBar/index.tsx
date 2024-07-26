import { ReactNode, useState } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
}

const TabBar = ({ tabs }: TabBarProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="w-97 h-full">
      <div className="flex w-full gap-4 border-b border-gray-100 px-4">
        {tabs.map(({ label }, index) => (
          <Tab
            key={label}
            label={label}
            isActive={activeTabIndex === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="flex h-fit w-full items-center justify-center">
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

interface TabProps {
  label: Tab['label'];
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-fit cursor-pointer select-none bg-white py-2.5 text-body1 ${isActive ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
    >
      {label}
    </div>
  );
};

export default TabBar;
