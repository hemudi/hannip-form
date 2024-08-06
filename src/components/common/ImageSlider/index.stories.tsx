import { onboardingData } from '@app/onboarding/constants';
import ImageSlider from '@components/common/ImageSlider';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  render: ({ images }) => {
    const [index, setIndex] = useState<number>(0);
    return (
      <div className="h-fit w-89">
        <ImageSlider images={images} index={index} setIndex={setIndex} />
      </div>
    );
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: onboardingData,
    index: 0,
    setIndex: () => {},
  },
};
