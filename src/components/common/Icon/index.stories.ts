import Icon from '@components/common/Icon';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
    },
    fill: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
  },
  args: {
    type: 'leftArrow',
    size: 'medium',
    fill: 'none',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
