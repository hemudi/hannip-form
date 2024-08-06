import { Meta, StoryObj } from '@storybook/react';
import Header from '@components/Layout/Header';
import Menu from '@components/Layout/Header/Menu';

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
    <div className="h-fit w-97 bg-slate-400">
      <Header {...args} />
    </div>
  ),
  args: {
    leftMenu: <Menu type="prevPage" />,
    rightMenu: <Menu type="myPage" />,
  },
};
