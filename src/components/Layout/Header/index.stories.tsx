import { Meta, StoryObj } from '@storybook/react';
import Header from '@components/Layout/Header';
import Icon from '@components/common/Icon';

const meta = {
  title: 'Components/Layout/Header',
  component: Header,
  argTypes: {
    leftMenu: {
      control: 'radio',
      options: ['home', 'myPage', 'setting', 'prevPage', null],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => (
    <div className="w-97 h-fit bg-slate-400">
      <Header {...args} />
    </div>
  ),
  args: {
    leftMenu: 'prevPage',
    rightMenu: 'myPage',
  },
};
