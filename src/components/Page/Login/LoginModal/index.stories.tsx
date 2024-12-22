import Layout from '@components/Layout';
import LoginModal from '@components/Page/Login/LoginModal';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/LoginModal',
  component: LoginModal,
  render: (args) => (
    <Layout>
      <LoginModal {...args} />
    </Layout>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Kakao: Story = {
  args: {
    warningText: '최근생성내역은',
    isShow: true,
    clickModal: () => {},
  },
};
