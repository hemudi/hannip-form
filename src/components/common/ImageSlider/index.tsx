'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Image = {
  title: string;
  alt: string;
  src: string;
};

interface ImageSlider {
  images: Image[];
}

const ImageSlider = ({ images }: ImageSlider) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateWidth = () => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.clientWidth); // 상위 태그의 너비 설정
    }
  };

  useEffect(() => {
    updateWidth(); // 컴포넌트가 처음 렌더링될 때 너비 설정
    window.addEventListener('resize', updateWidth); // 리사이즈 이벤트 리스너 추가
    return () => {
      window.removeEventListener('resize', updateWidth); // 리스너 정리
    };
  }, []);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
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
          transform: `translateX(-${currentIndex * sliderWidth}px)`,
        }}
      >
        {images.map(({ alt, src, title }) => (
          <div
            key={alt}
            className="flex h-full max-w-89 flex-col items-center justify-center gap-6 break-words"
            style={{ width: `${sliderWidth}px` }}
          >
            <span className="whitespace-pre-line text-center text-h3 font-bold">{title}</span>
            <Image
              className="h-full max-h-89 w-auto max-w-89"
              width="0"
              height="0"
              alt="image"
              src={src}
            />
          </div>
        ))}
      </div>
      <div className="flex h-fit w-full justify-center gap-2">
        {new Array(images.length).fill(0).map((_, index) => (
          <SliderIndexDot
            key={index}
            isCurrentIndex={currentIndex === index}
            onClick={() => handleChangeIndex(index)}
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
      className={`cursor-pointer ${dotStyles[isCurrentIndex ? 'current' : 'default']}`}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
