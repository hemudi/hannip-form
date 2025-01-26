interface Tip {
  title: string;
  content?: string;
  example?: string;
}

const SCRIPT_TIP_LIST: Tip[] = [
  {
    title: '1. 계절감, 시즌 어휘를 사용해보세요.',
    content: '계절감 있는 결과를 만날 수 있어요.',
    example: 'ex) 크리스마스, 추석',
  },
  {
    title: '2. 숏폼 타겟 대상자를 입력해보세요.',
    content: '대상자를 정확하게 인식하여 명확한 답변을 받을 수 있어요.',
    example: 'ex) 10대 청소년, 2030 직장인',
  },
  {
    title: '3. 주제를 명확하게 입력해주세요.',
    content: '구체적으로 정의할수록 좋아요.',
    example: 'ex) 여름 휴가 → 여름 바닷가 휴가',
  },
  {
    title: '4. 구체적인 요구사항을 입력해주세요.',
    content:
      '특별히 포함하고 싶은 요소, 중요 키워드가 AI의 응답을 명확하게 제한하여 더 적절한 결과를 생성할 수 있어요!',
    example: 'ex) 5가지 제안 및 설명 포함, 3개의 주요 포인트 포함, 해시태그 제안, 비유 사용',
  },
  {
    title: '5. 예시나 사례를 제시해보세요.',
    content: '특정 예시를 입력하면 AI가 유사한 사례를 생성하는데 도움이 될 거에요!',
    example:
      "ex) '독일의 크리스마스 마켓', '최근 인기 있는 넷플릭스 드라마'와 같은 구체적인 예시를 포함해주세요",
  },
];

const CHANNEL_INFO_TIP_LIST: Tip[] = [
  {
    title: '1. 채널 이름',
    content: '주제는 명확하고 간결하게, 본인만의 개성이 담긴 채널명을 입력해주세요',
  },
  {
    title: '2. 숏폼 타겟 대상자를 입력해보세요.',
    content: '어떤 연령대, 관심사를 가지는 사람을 대상으로 하는지 구체적으로 입력하세요',
    example: 'ex) 2030 직장인 여성, 자기계발과 라이프 스타일에 관심이 많은 사람들',
  },
  {
    title: '3. 채널 주제를 명확하게 입력해주세요.',
    content: '어떤 특정 분야와 내용, 메시지를 전달하고 싶은지 입력하세요',
    example: 'ex) 일상 속 쉽게 실천 가능한 자기계발',
  },
  {
    title: '4. 콘텐츠 형식과 스타일을 입력하세요.',
    example: 'ex) 브이로그, 리뷰, 인터넷, 튜토리얼 등',
  },
];

export const tips = {
  script: {
    title: '한입폼 100% 활용하기',
    subTitle: '원하는 답변을 받을 수 있는 꿀팁!',
    description: '이렇게 작성하면 정확한 답변을 받을 수 있어요',
    data: SCRIPT_TIP_LIST,
  },
  channel: {
    title: '자기소개 100% 활용하기',
    subTitle: '채널 소개는 이렇게 입력해보세요!',
    description: '이렇게 작성하면 나만의 대본을 받을 수 있어요',
    data: CHANNEL_INFO_TIP_LIST,
  },
};
