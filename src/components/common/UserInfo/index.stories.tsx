import UserInfo from '@components/common/UserInfo';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/UserInfo',
  component: UserInfo,
  args: {
    nickname: 'Hemdi',
    // email: 'suminhesam@gmail.com',
    profileImageUrl: 'https://avatars.githubusercontent.com/u/34249911?v=4',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
