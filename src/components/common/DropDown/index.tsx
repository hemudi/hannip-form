import Icon from '@components/common/Icon';
import React, { useEffect, useRef, useState } from 'react';

export type Option = {
  label: string;
  value: string;
};

interface DropDownProps {
  options: Option[];
  placeholder: string;
  defaultOption?: Option;
  handleOptionChange?: (option: Option) => void;
}

const Dropdown = ({
  options,
  placeholder,
  defaultOption,
  handleOptionChange = () => {},
  ...props
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(defaultOption || null);

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
    <div className="relative h-fit w-full select-none" ref={dropdownRef} {...props}>
      <div
        tabIndex={0}
        className={`flex h-12 cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-body1 ${isOpen ? 'border border-gray-300 bg-white text-black' : 'bg-gray-50'} ${selectedOption ? 'text-black' : 'text-gray-500'}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <Icon type={isOpen ? 'upDirection' : 'rightDirection'} color="#888889" />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-44 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white p-[0.375rem] shadow-lg">
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
