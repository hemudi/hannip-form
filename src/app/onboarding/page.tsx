import ImageSlider from '@components/common/ImageSlider';

const onboardingImages = [
  {
    title: '관심있는 주제와\n원하는 문체를 선택하면',
    alt: 'onboarding_image_1',
    src: 'assets/images/onboarding/1.svg',
  },
  {
    title: '트렌디하고 완성도 있는\n스크립트가 한번에 완성!',
    alt: 'onboarding_image_2',
    src: 'assets/images/onboarding/2.svg',
  },
  {
    title: '당신의 채널도 떡상각!\n이제 스크립트를 만들러 가볼까요?',
    alt: 'onboarding_image_3',
    src: 'assets/images/onboarding/3.svg',
  },
];

const OnboardingPage = () => {
  return (
    <div>
      <div className="max-w-89 h-fit">
        <ImageSlider images={onboardingImages} />
      </div>
    </div>
  );
};

export default OnboardingPage;