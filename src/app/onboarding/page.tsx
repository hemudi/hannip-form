'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onboardingData } from '@app/onboarding/constants';
import Layout from '@components/Layout';
import Menu from '@components/Layout/Header/Menu';
import ImageSlider from '@components/common/ImageSlider';
import { ROUTING_PATH } from '@constants/routingPath';
import Button from '@components/common/Button';
import useToken from '@hooks/useToken';
import { useCookies } from 'next-client-cookies';

const BOTTOM_MENU_TEXT = {
  TO_NEXT: '다음',
  TO_PLANNING: '기획하러 가기',
};

const SLIDER_INDEX = {
  FIRST: 0,
  LAST: onboardingData.length - 1,
};

const OnboardingPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(SLIDER_INDEX.FIRST);
  const isLastSlider = currentIndex === SLIDER_INDEX.LAST;
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const cookies = useCookies();

  useEffect(() => {
    const token = cookies.get('token');
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
        <div className="h-fit max-w-89">
          <ImageSlider index={currentIndex} setIndex={setCurrentIndex} images={onboardingData} />
        </div>
      </Layout.Main>
      <Layout.BottomMenu>
        {isLastSlider ? (
          <Link href={ROUTING_PATH.PLANNING}>
            <Button color="primary">{BOTTOM_MENU_TEXT.TO_PLANNING}</Button>
          </Link>
        ) : (
          <Button onClick={() => setCurrentIndex((prev) => prev + 1)}>
            {BOTTOM_MENU_TEXT.TO_NEXT}
          </Button>
        )}
      </Layout.BottomMenu>
    </>
  );
};

export default OnboardingPage;
