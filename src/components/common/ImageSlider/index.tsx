'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type Image = {
  title: string;
  description: string;
  alt: string;
  src: string;
};

interface ImageSlider {
  images: Image[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const ImageSlider = ({ images, index, setIndex }: ImageSlider) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateWidth = () => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.clientWidth);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    const { left, right } = sliderRef.current?.getBoundingClientRect() || { left: 0, right: 0 };

    const center = (left + right) / 2;

    if (clientX < center) {
      setIndex(Math.max(index - 1, 0));
    } else {
      setIndex(Math.min(index + 1, images.length - 1));
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleChangeIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <div
      className="flex w-full select-none flex-col justify-items-center gap-6 overflow-hidden"
      ref={sliderRef}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${sliderWidth * images.length}px`,
          transform: `translateX(-${index * sliderWidth}px)`,
        }}
      >
        {images.map(({ alt, src, title, description }) => (
          <div
            onClick={handleClick}
            key={alt}
            className="flex h-full max-w-89 flex-col items-center justify-center gap-6 break-words"
            style={{ width: `${sliderWidth}px` }}
          >
            <Image
              className="h-full max-h-89 w-auto max-w-89"
              width="0"
              height="0"
              alt="image"
              src={src}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="whitespace-pre-line text-center text-h3 font-bold">{title}</span>
              <span className="whitespace-pre-line text-center text-body2 text-gray-700">
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-fit w-full justify-center gap-2">
        {new Array(images.length).fill(0).map((_, dotIndex) => (
          <SliderIndexDot
            key={dotIndex}
            isCurrentIndex={dotIndex === index}
            onClick={() => handleChangeIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

interface SliderIndexDotProps {
  isCurrentIndex: boolean;
  onClick: () => void;
}

const dotStyles = {
  current: 'w-4 h-2 rounded-lg bg-primary-500',
  default: 'w-2 h-2 rounded-full bg-gray-300',
};

const SliderIndexDot = ({ isCurrentIndex, onClick }: SliderIndexDotProps) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-300 ${dotStyles[isCurrentIndex ? 'current' : 'default']}`}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
