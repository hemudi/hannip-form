import TextArea from '@components/common/TextArea';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    disabled: false,
    placeholder: 'TextArea',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    defaultValue: '',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    defaultValue: '',
    helperText: '10글자 이상 입력해주세요',
  },
};
