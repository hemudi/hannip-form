import ProgressBar from '@components/common/ProgressBar';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 1,
  },
};
