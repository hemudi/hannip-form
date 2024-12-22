'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onboardingData, SLIDER_TEXT } from '@app/onboarding/constants';
import Layout from '@components/Layout';
import Menu from '@components/Layout/Header/Menu';
import ImageSlider from '@components/common/ImageSlider';
import { ROUTING_PATH } from '@constants/routingPath';
import Button from '@components/common/Button';
import { getCookie } from 'cookies-next';

const OnboardingPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(SLIDER_TEXT.INDEX.FIRST);
  const isLastSlider = currentIndex === SLIDER_TEXT.INDEX.LAST;
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie('access');
    setIsLogin(token !== undefined);
  }, []);

  return (
    <>
      <Layout.Header
        leftMenu={isLogin ? <Menu type="myPage" /> : <Menu type="prevPage" />}
        rightMenu={
          isLastSlider || (
            <Link
              href={ROUTING_PATH.PLANNING}
              className="h-full w-fit text-center text-body2 text-gray-500 hover:text-black"
            >
              SKIP
            </Link>
          )
        }
      />
      <Layout.Main>
        <div className="flex h-full max-w-89 items-center justify-center">
          <ImageSlider index={currentIndex} setIndex={setCurrentIndex} images={onboardingData} />
        </div>
      </Layout.Main>
      <Layout.BottomMenu>
        {isLastSlider ? (
          <Link href={ROUTING_PATH.PLANNING}>
            <Button color="primary">{SLIDER_TEXT.BUTTON.TO_PLANNING}</Button>
          </Link>
        ) : (
          <Button onClick={() => setCurrentIndex((prev) => prev + 1)}>
            {SLIDER_TEXT.BUTTON.TO_NEXT}
          </Button>
        )}
      </Layout.BottomMenu>
    </>
  );
};

export default OnboardingPage;
