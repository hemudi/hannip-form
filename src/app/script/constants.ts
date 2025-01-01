interface ScriptTip {
  title: string;
  content: string;
  example: string;
}

export const scriptTips: ScriptTip[] = [
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
      '특별히 포함하고 싶은 요소, 중요 키워드가 AI의 응답을 명확하게 제한하여 더 적절한 결과를 생성할 수 있어요! ',
    example: 'ex) 5가지 제안 및 설명 포함, 3개의 주요 포인트 포함, 해시태그 제안, 비유 사용',
  },
  {
    title: '5. 예시나 사례를 제시해보세요.',
    content: '특정 예시를 입력하면 AI가 유사한 사례를 생성하는데 도움이 될 거에요!',
    example:
      "ex) '독일의 크리스마스 마켓', '최근 인기 있는 넷플릭스 드라마'와 같은 구체적인 예시를 포함해주세요",
  },
];
