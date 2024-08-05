import { onboardingData } from '@app/onboarding/constants';
import ImageSlider from '@components/common/ImageSlider';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  render: (args) => (
    <div className="h-fit w-89">
      <ImageSlider {...args} />
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof ImageSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: onboardingData,
  },
};
