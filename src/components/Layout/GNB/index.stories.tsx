import { Meta, StoryObj } from '@storybook/react';
import GNB from '@components/Layout/GNB';
import Layout from '@components/Layout';

const meta = {
  title: 'Components/Layout/GNB',
  component: GNB,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof GNB>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => (
    <div className="h-fit w-97">
      <GNB {...args} />
    </div>
  ),
  args: {
    currentPath: 'home',
  },
};
