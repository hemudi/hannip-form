import { ReactNode, useState } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
  defaultTab?: number;
  onChange?: (index: number) => void;
}

const TabBar = ({ tabs, defaultTab = 0, onChange }: TabBarProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultTab);

  const handleTabClick = (index: number) => {
    if (onChange) onChange(index);
    setActiveTabIndex(index);
  };

  return (
    <div className="w-full max-w-97">
      <div className="sticky top-0 z-10 flex w-full gap-4 border-b border-gray-100 bg-white px-4">
        {tabs.map(({ label }, index) => (
          <Tab
            key={label}
            label={label}
            isActive={activeTabIndex === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="flex w-full items-center justify-center">{tabs[activeTabIndex].content}</div>
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
