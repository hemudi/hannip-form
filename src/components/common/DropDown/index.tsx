import Icon from '@components/common/Icon';
import React, { useEffect, useRef, useState } from 'react';

type Option = {
  label: string;
  value: string;
};

interface DropDownProps {
  options: Option[];
  placeholder: string;
  handleOptionChange: (option: Option) => void;
}

const Dropdown = ({ options, placeholder, handleOptionChange, ...props }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    setSelectedOption(option);
    handleOptionChange(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative h-4 w-80 select-none" ref={dropdownRef} {...props}>
      <div
        tabIndex={0}
        className={`flex cursor-pointer justify-between rounded-lg border border-gray-300 p-2 text-body1 ${isOpen ? 'bg-white text-black' : 'bg-gray-50'} ${selectedOption ? 'text-black' : 'text-gray-500'}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <Icon type={isOpen ? 'upDirection' : 'rightDirection'} color="#888889" />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-gray-300 bg-white p-[0.375rem] shadow-lg">
          {options.map(({ value, label }) => (
            <div
              key={value}
              className="cursor-pointer rounded-lg p-2 hover:bg-gray-100"
              onClick={() => handleOptionClick({ value, label })}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;