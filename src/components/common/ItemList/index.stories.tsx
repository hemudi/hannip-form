import { Meta, StoryObj } from '@storybook/react';
import ItemList from '@components/common/ItemList';
import Item from '@components/common/ItemList/Item';

const meta = {
  title: 'Components/ItemList',
  component: ItemList,
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof ItemList>;

export default meta;

type Story = StoryObj<typeof meta>;

const ItemComponent = (
  <Item
    text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
    iconType="bookmark"
  />
);

export const List: Story = {
  args: {
    itemList: [ItemComponent, ItemComponent, ItemComponent],
  },
};

export const ListItem: Story = {
  args: {
    itemList: [ItemComponent],
  },
};
