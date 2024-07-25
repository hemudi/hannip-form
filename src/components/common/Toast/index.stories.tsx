import Toast from '@components/common/Toast';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  args: {
    message: '스크립트가 복사되었습니다!',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '스크립트가 삭제되었습니다.',
  },
};
