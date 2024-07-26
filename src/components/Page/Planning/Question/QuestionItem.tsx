import { ItemLayout, QuestionLayout } from '@components/Page/Planning/Question/Layout';
import Dropdown, { Option } from '@components/common/DropDown';
import ItemList from '@components/common/ItemList';
import Item from '@components/common/ItemList/Item';
import TextField from '@components/common/TextField';

export const QuestionItem1 = () => {
  const handleOptionChange = (option: Option) => {
    console.log(option);
  };
  return (
    <QuestionLayout title="스크립트의 시작은 주제부터!">
      <ItemLayout title="내 채널을 한줄로 소개해주세요">
        <TextField placeholder="최소 1자, 최대 30자 이내 (공백포함)" />
      </ItemLayout>
      <ItemLayout title="만들고 싶은 영상의 카테고리를 알려주세요" className="relative">
        <Dropdown
          placeholder="카테고리를 선택해주세요"
          options={[
            { value: '1', label: '게임' },
            { value: '2', label: '과학기술' },
            { value: '3', label: '교육' },
            { value: '4', label: '노하우/스타일' },
            { value: '5', label: '뉴스/정치' },
          ]}
          handleOptionChange={handleOptionChange}
        />
      </ItemLayout>
      <ItemLayout title="영상의 간단한 내용을 입력해주세요">
        <TextField placeholder="최소 1자, 최대 30자 이내 (공백포함)" />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem2 = () => {
  return (
    <QuestionLayout title="아이디어가 완성되었어요!">
      <ItemLayout title="이중에 하나를 골라주세요">
        <ItemList
          itemList={[
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
          ]}
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem3 = () => {
  return (
    <QuestionLayout title="아이디어가 완성되었어요!">
      <ItemLayout title="이중에 하나를 골라주세요">
        <ItemList
          itemList={[
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
          ]}
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem4 = () => {
  return (
    <QuestionLayout title="아이디어가 완성되었어요!">
      <ItemLayout title="이중에 하나를 골라주세요">
        <ItemList
          itemList={[
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
          ]}
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem5 = () => {
  return (
    <QuestionLayout title="아이디어가 완성되었어요!">
      <ItemLayout title="이중에 하나를 골라주세요">
        <ItemList
          itemList={[
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
          ]}
        />
      </ItemLayout>
    </QuestionLayout>
  );
};

export const QuestionItem6 = () => {
  return (
    <QuestionLayout title="아이디어가 완성되었어요!">
      <ItemLayout title="이중에 하나를 골라주세요">
        <ItemList
          itemList={[
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
            <Item
              text="파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?"
              iconType="check"
            />,
          ]}
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
