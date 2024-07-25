import TextField from '@components/common/TextField';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    disabled: false,
    placeholder: 'Textfield',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    helperText: '10글자 이상 입력해주세요',
  },
};
