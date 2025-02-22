'use client';

import { editChannelInfo, type ChannelInfo } from '@apis/user';
import Button from '@components/common/Button';
import Dropdown, { Option } from '@components/common/DropDown';
import TextArea from '@components/common/TextArea';
import { notify } from '@components/common/Toast';
import Layout from '@components/Layout';
import Menu from '@components/Layout/Header/Menu';
import { ROUTING_PATH } from '@constants/routingPath';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const categoryList = [
  '게임',
  '과학기술',
  '교육',
  '노하우/스타일',
  '뉴스/정치',
  '비영리/사회운동',
  '스포츠',
  '애완동물/동물',
  '엔터테인먼트',
  '여행/이벤트',
  '영화/애니메이션',
  '인물/블로그',
  '음악',
  '자동차/교통',
  '코미디',
];

const ChannelInfo = () => {
  const [{ description, category }, setChannelInfo] = useState<ChannelInfo>({
    description: '',
    category: '',
  });

  const router = useRouter();

  const handleOnChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setChannelInfo((prev) => ({ ...prev, description: target.value }));
  };

  const handleOptionChange = (option: Option) => {
    setChannelInfo((prev) => ({ ...prev, category: option.value }));
  };

  const saveChannelInfo = () => {
    editChannelInfo({ description, category }).then(({ status, statusText }) => {
      if (status === 200) {
        notify.success('채널 정보가 저장되었습니다!');
        router.replace(ROUTING_PATH.MY_PAGE);
      } else {
        notify.error('채널 정보 저장에 실패했습니다!');
      }
    });
  };

  return (
    <>
      <Layout.Header rightMenu={<Menu type="close" />} />
      <Layout.Main>
        <div className="flex h-full w-full flex-col items-center gap-8">
          <h1 className="w-full text-h3 font-semibold">채널 정보를 입력해주세요</h1>
          <div className={`flex w-full flex-col gap-2`}>
            <div className="w-full text-body1 font-semibold text-gray-900">
              채널을 소개해주세요<span className="text-gray-400"> *</span>
            </div>
            <TextArea
              defaultValue={description}
              placeholder="예시) 30대 여자의 뚜벅이 제주도 한달살이 브이로그를 공유하는 채널입니다."
              onChange={handleOnChange}
            />
          </div>
          <div className={`flex w-full flex-col gap-2`}>
            <div className="w-full text-body1 font-semibold text-gray-900">
              만들고 싶은 영상의 카테고리를 알려주세요<span className="text-gray-400"> *</span>
            </div>
            <Dropdown
              defaultOption={{ value: category, label: category }}
              placeholder="카테고리를 선택해주세요"
              options={categoryList.map((category) => ({ value: category, label: category }))}
              handleOptionChange={handleOptionChange}
            />
          </div>
        </div>
      </Layout.Main>
      <Layout.BottomMenu>
        <Button
          size="full"
          onClick={saveChannelInfo}
          disabled={category === '' || description === ''}
        >
          채널 정보 저장하기
        </Button>
      </Layout.BottomMenu>
    </>
  );
};

export default ChannelInfo;
