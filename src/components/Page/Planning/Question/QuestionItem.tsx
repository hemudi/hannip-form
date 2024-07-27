import { createIdea } from '@api/clova';
import Loading from '@components/Layout/Loading';
import { ItemLayout, QuestionLayout } from '@components/Page/Planning/Question/Layout';
import Dropdown, { Option } from '@components/common/DropDown';
import Icon from '@components/common/Icon';
import TextArea from '@components/common/TextArea';
import TextField from '@components/common/TextField';
import { useIdeaAction, useIdeaParams, useIdeaState } from '@store/idea';
import { useScriptAction, useScriptState } from '@store/script';
import { FocusEvent, useEffect, useState } from 'react';

interface QuestionItemProps {
  setIsDone: (isDone: boolean) => void;
}

const checkTextLength = (min: number, max: number, text: string) => {
  const textLength = text.length;
  return textLength >= min && textLength <= max;
};

const categoryList = [
  '게임',
  '과학기술',
  '교육',
  '노하우/스타일',
  '뉴스/정치',
  '비영리/사회운동',
  '스포츠',
  '애완동물/동물',
  '엔터테이먼트',
  '여행/이벤트',
  '영화/애니메이션',
  '인물/블로그',
  '음악',
  '자동차/교통',
  '코미디',
];

export const QuestionItem1 = ({ setIsDone }: QuestionItemProps) => {
  const { setIdeaState } = useIdeaAction();
  const { category, info, content } = useIdeaState();

  useEffect(() => {
    setIsDone(
      checkTextLength(1, 30, category) &&
        checkTextLength(1, 30, info) &&
        checkTextLength(1, 30, content),
    );
  }, [category, info, content]);

  const handleOnBlur = ({ target }: FocusEvent<HTMLInputElement>, type: 'info' | 'content') => {
    setIdeaState({ [type]: target.value });
  };

  const handleOptionChange = (option: Option) => {
    setIdeaState({ category: option.value });
  };

  return (
    <QuestionLayout title="스크립트의 시작은 주제부터!">
      <ItemLayout title="내 채널을 한줄로 소개해주세요">
        <TextField
          variant={checkTextLength(0, 30, info) ? 'default' : 'error'}
          onBlur={(event) => handleOnBlur(event, 'info')}
          placeholder="최소 1자, 최대 30자 이내 (공백포함)"
          helperText={
            checkTextLength(0, 30, info) ? undefined : '최소 1자, 최대 30자 이내로 입력해주세요'
          }
        />
      </ItemLayout>
      <ItemLayout title="만들고 싶은 영상의 카테고리를 알려주세요">
        <Dropdown
          placeholder="카테고리를 선택해주세요"
          options={categoryList.map((category) => ({ value: category, label: category }))}
          handleOptionChange={handleOptionChange}
        />
      </ItemLayout>
      <ItemLayout title="영상의 간단한 내용을 입력해주세요">
        <TextField
          variant={checkTextLength(0, 30, content) ? 'default' : 'error'}
          onBlur={(event) => handleOnBlur(event, 'content')}
          placeholder="최소 1자, 최대 30자 이내 (공백포함)"
          helperText={
            checkTextLength(0, 30, content) ? undefined : '최소 1자, 최대 30자 이내로 입력해주세요'
          }
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem2 = ({ setIsDone }: QuestionItemProps) => {
  const [ideaList, setIdeaList] = useState<string[] | null>(null);
  const ideaParams = useIdeaParams();
  const { setIdeaState } = useIdeaAction();
  const { selectedIdea } = useIdeaState();

  const handleClickIdea = (selectedIdea: string) => {
    setIdeaState({ selectedIdea: selectedIdea });
  };

  useEffect(() => {
    createIdea(ideaParams).then((data) => {
      setIdeaList(data);
      setIdeaState({ ideaList: data });
    });
  }, []);

  useEffect(() => {
    setIsDone(selectedIdea !== '');
  }, [selectedIdea]);

  return ideaList !== null ? (
    <QuestionLayout title="아이디어가 완성되었어요!">
      <ItemLayout title="이중에 하나를 골라주세요">
        <div className="flex w-full cursor-pointer select-none flex-col gap-2.5 overflow-y-auto bg-white scrollbar-hide">
          {ideaList.map((ideaText, index) => {
            const isSelected = ideaText === selectedIdea;
            return (
              <div
                key={index}
                onClick={() => handleClickIdea(ideaText)}
                className={`flex w-full items-center justify-center gap-2.5 rounded-lg px-5 py-4 text-body1 ${isSelected ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}
              >
                <div className="flex w-full items-center justify-between">
                  <span>{ideaText}</span>
                  <div>
                    <Icon type={'check'} color={isSelected ? '#ffffff' : '#121212'} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ItemLayout>
    </QuestionLayout>
  ) : (
    <Loading title="아이디어가 구워지고 있어요!" />
  );
};

export const QuestionItem3 = ({ setIsDone }: QuestionItemProps) => {
  const { setScriptState } = useScriptAction();
  const { essential } = useScriptState();
  const { selectedIdea } = useIdeaState();

  const handleOnBlur = ({ target }: FocusEvent<HTMLTextAreaElement>) => {
    setScriptState({ essential: target.value, idea: selectedIdea });
  };

  useEffect(() => {
    setIsDone(checkTextLength(1, 500, essential));
  }, [essential]);

  return (
    <QuestionLayout title="어떤 내용이 필수인가요?">
      <ItemLayout title="스크립트에 꼭 들어가야할 내용을 작성해주세요">
        <TextArea placeholder="최소 1자, 최대 500자 이내 (공백포함)" onBlur={handleOnBlur} />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem4 = ({ setIsDone }: QuestionItemProps) => {
  const { setScriptState } = useScriptAction();
  const { intro, ending } = useScriptState();

  const handleOnBlur = ({ target }: FocusEvent<HTMLTextAreaElement>, type: 'intro' | 'ending') => {
    setScriptState({ [type]: target.value });
  };

  useEffect(() => {
    setIsDone(checkTextLength(1, 500, intro) && checkTextLength(1, 500, ending));
  }, [intro, ending]);

  return (
    <QuestionLayout title="어떤 내용이 필수인가요?">
      <ItemLayout title="인트로 문구가 있다면 작성해주세요">
        <TextArea
          onBlur={(event) => handleOnBlur(event, 'intro')}
          placeholder="최소 1자, 최대 500자 이내 (공백포함)&#13;&#10;ex) 이거 모르면 큰일납니다!"
        />
      </ItemLayout>
      <ItemLayout title="엔딩 문구가 있다면 작성해주세요">
        <TextArea
          onBlur={(event) => handleOnBlur(event, 'ending')}
          placeholder="최소 1자, 최대 500자 이내 (공백포함)&#13;&#10;ex) 가시기전에 좋댓구알 안잊으셨죠?"
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem5 = ({ setIsDone }: QuestionItemProps) => {
  const { setScriptState } = useScriptAction();
  const { length } = useScriptState();

  const handleOptionChange = (option: Option) => {
    setScriptState({ length: option.value });
  };

  useEffect(() => {
    setIsDone(length !== '');
  }, [length]);

  return (
    <QuestionLayout title="몇초짜리 영상인가요?">
      <ItemLayout title="영상 길이를 선택해주세요">
        <Dropdown
          placeholder="영상 길이를 선택"
          options={[
            { value: '15초', label: '15초' },
            { value: '30초', label: '30초' },
            { value: '45초', label: '45초' },
            { value: '1분', label: '1분' },
          ]}
          handleOptionChange={handleOptionChange}
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem6 = ({ setIsDone }: QuestionItemProps) => {
  const { setScriptState } = useScriptAction();
  const { tone, trend, accent } = useScriptState();

  const handleOptionChange = (type: 'tone' | 'trend' | 'accent') => (option: Option) => {
    setScriptState({ [type]: option.value });
  };

  useEffect(() => {
    setIsDone(tone !== '' && trend !== '');
  }, [tone, trend]);

  return (
    <QuestionLayout title="어떤 말투를 쓰시나요?">
      <ItemLayout title="존댓말 여부를 선택해주세요">
        <Dropdown
          placeholder="카테고리를 선택해주세요"
          options={[
            { value: '반말', label: '반말' },
            { value: '존댓말', label: '존댓말' },
            { value: '상관 없음', label: '상관 없음' },
          ]}
          handleOptionChange={handleOptionChange('tone')}
        />
      </ItemLayout>
      <ItemLayout title="사투리를 선택해주세요">
        <Dropdown
          placeholder="카테고리를 선택해주세요"
          options={[
            { value: '충청도', label: '충청도 사투리' },
            { value: '전라도', label: '전라도 사투리' },
            { value: '경상도', label: '경상도 사투리' },
            { value: '제주도', label: '제주도 사투리' },
            { value: '사용 안함', label: '사용 안함' },
          ]}
          handleOptionChange={handleOptionChange('accent')}
        />
      </ItemLayout>
      <ItemLayout title="유행어를 선택해주세요">
        <Dropdown
          placeholder="카테고리를 선택해주세요"
          options={[
            { value: '추구미', label: '추구미' },
            { value: '~그 잡채', label: '~그 잡채' },
            { value: '~은 이 일을 기억할 것입니다', label: '~은 이 일을 기억할 것입니다' },
            { value: '완전 럭키비키잖아', label: '완전 럭키비키잖아' },
            { value: '사용 안함', label: '사용 안함' },
          ]}
          handleOptionChange={handleOptionChange('trend')}
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

const questionList = [
  QuestionItem1,
  QuestionItem2,
  QuestionItem3,
  QuestionItem4,
  QuestionItem5,
  QuestionItem6,
];

export default questionList;
