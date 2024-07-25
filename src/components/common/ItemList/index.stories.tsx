import Icon from '@components/common/Icon';
import ItemList from '@components/common/ItemList';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ItemList',
  component: ItemList,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof ItemList>;

export default meta;

type Story = StoryObj<typeof meta>;

const ItemComponent = (
  <div className="flex items-center">
    <span>파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?</span>
    <div className="cursor-pointer">
      <Icon type="bookmark" />
    </div>
  </div>
);

export const List: Story = {
  args: {
    itemList: [ItemComponent, ItemComponent, ItemComponent],
  },
};

export const Item: Story = {
  args: {
    itemList: [ItemComponent],
  },
};
