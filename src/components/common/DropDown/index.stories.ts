import DropDown from '@components/common/DropDown';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/DropDown',
  component: DropDown,
  args: {
    handleOptionChange: (option) => {
      console.log(option);
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: '게임' },
      { value: '2', label: '과학기술' },
      { value: '3', label: '교육' },
      { value: '4', label: '노하우/스타일' },
      { value: '5', label: '뉴스/정치' },
    ],
    placeholder: '카테고리를 선택해주세요',
  },
};
