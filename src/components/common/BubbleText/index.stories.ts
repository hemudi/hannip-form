import BubbleText from '@components/common/BubbleText';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/BubbleText',
  component: BubbleText,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof BubbleText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '로그인 시 숏폼 대본과 아이디어를 저장하실 수 있어요!',
  },
};
