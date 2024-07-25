import ProfileImage from '@components/common/ProfileImage';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ProfileImage',
  component: ProfileImage,
  args: {
    src: 'https://avatars.githubusercontent.com/u/34249911?v=4',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
