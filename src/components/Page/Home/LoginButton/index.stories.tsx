import Layout from '@components/Layout';
import LoginButton from '@components/Page/Home/LoginButton';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/LoginButton',
  component: LoginButton,
  render: (args) => (
    <Layout>
      <LoginButton {...args} />
    </Layout>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof LoginButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Kakao: Story = {
  args: {
    type: 'kakao',
    onClick: () => {},
  },
};

export const Naver: Story = {
  args: {
    type: 'naver',
    onClick: () => {},
  },
};
