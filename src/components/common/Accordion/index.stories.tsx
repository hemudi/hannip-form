import Accordion from '@components/common/Accordion';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '숏폼 제작을 위한 팁이에요!',
    children: (
      <div className="flex w-full items-center justify-center whitespace-pre-line rounded-lg bg-gray-50 p-4 text-body2">
        {`[조명과 배경]
밝고 자연스러운 조명을 사용하세요. 자연광이 가장 좋지만, 인공 조명을 사용할 경우 그림자가 생기지 않도록 조심하세요. 깔끔한 배경을 유지하여 시청자가 집중할 수 있게 합니다.

[음향]
배경 음악을 선택할 때는 조용하고 기분 좋은 곡을 선택하세요. 내레이션이나 자막을 통해 필요한 정보를 전달하세요. 너무 많은 텍스트보다는 간결한 설명이 효과적입니다.

[속도와 타이밍]
숏폼 영상은 빠르게 진행되어야 합니다. 각 장면을 짧고 임팩트 있게 편집하세요. 시청자의 주의를 끌기 위해 중요한 부분에서 화면 전환 효과를 사용해도 좋습니다.

[시각적 요소]
중요한 단계마다 클로즈업을 사용하여 디테일을 강조하세요. 색상이 풍부하고 선명하게 보이도록 편집하세요.`}
      </div>
    ),
  },
};
