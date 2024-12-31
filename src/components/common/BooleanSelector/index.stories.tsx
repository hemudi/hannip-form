import { Meta, StoryObj } from '@storybook/react';
import BooleanSelector from '@components/common/BooleanSelector';

const meta = {
  title: 'Components/Boolean Selector',
  component: BooleanSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof BooleanSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (value) => {
      console.log(value);
    },
  },
};
