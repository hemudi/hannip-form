'use client';

import Link from 'next/link';
import { useState } from 'react';
import { onboardingData, SLIDER } from '@app/onboarding/constants';
import Layout from '@components/Layout';
import ImageSlider from '@components/common/ImageSlider';
import { ROUTING_PATH } from '@constants/routingPath';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';

const OnboardingPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(SLIDER.INDEX.FIRST);
  const isLastSlider = currentIndex === SLIDER.INDEX.LAST;

  return (
    <>
      <Layout.Header
        leftMenu={
          currentIndex !== SLIDER.INDEX.FIRST && (
            <div
              className="w-fit cursor-pointer"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, SLIDER.INDEX.FIRST))}
            >
              <Icon type="leftDirection" />
            </div>
          )
        }
        rightMenu={
          isLastSlider || (
            <Link
              href={ROUTING_PATH.MAIN}
              className="h-full w-fit text-center text-body2 text-gray-500 hover:text-black"
            >
              SKIP
            </Link>
          )
        }
      />
      <Layout.Main>
        <div className="flex h-full w-full max-w-89 items-center justify-center">
          <ImageSlider index={currentIndex} setIndex={setCurrentIndex} images={onboardingData} />
        </div>
      </Layout.Main>
      <Layout.BottomMenu>
        {isLastSlider ? (
          <Link className="w-full" href={ROUTING_PATH.PLANNING}>
            <Button size="full" color="primary">
              {SLIDER.BUTTON_TEXT.TO_PLANNING}
            </Button>
          </Link>
        ) : (
          <Button size="full" onClick={() => setCurrentIndex((prev) => prev + 1)}>
            {SLIDER.BUTTON_TEXT.TO_NEXT}
          </Button>
        )}
      </Layout.BottomMenu>
    </>
  );
};

export default OnboardingPage;
