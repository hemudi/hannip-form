import Button from '@components/common/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['colored', 'line'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'colored',
    size: 'medium',
    children: 'Text',
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    variant: 'colored',
    size: 'medium',
    children: 'Text',
  },
};
