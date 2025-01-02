import MenuLayout from '@components/Page/MyPage/MenuLayout';
import { MY_PAGE_MENUS } from '@components/Page/MyPage/MenuLayout/constants';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/MenuLayout',
  component: MenuLayout,

  tags: ['autodocs'],
} satisfies Meta<typeof MenuLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: MY_PAGE_MENUS[0],
  render: ({ ...args }) => (
    <div className="w-97">
      <MenuLayout {...args} />
    </div>
  ),
};
