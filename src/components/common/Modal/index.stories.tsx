import Modal from '@components/common/Modal';
import Button from '@components/common/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '로그아웃 하시겠습니까?',
    children: (
      <div className="flex h-fit w-full gap-2">
        <Button variant="line">취소하기</Button>
        <Button>로그아웃</Button>
      </div>
    ),
    onClose: () => {},
  },
};
