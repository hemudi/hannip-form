'use client';

import { editChannelInfo, getChannelInfo, type ChannelInfo } from '@apis/user';
import Button from '@components/common/Button';
import Dropdown, { Option } from '@components/common/DropDown';
import Icon from '@components/common/Icon';
import TextArea from '@components/common/TextArea';
import TipBanner from '@components/common/TipBanner';
import { notify } from '@components/common/Toast';
import Layout from '@components/Layout';
import { categoryList } from '@constants/category';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

const ChannelInfo = () => {
  const router = useRouter();
  const [{ description, category }, setChannelInfo] = useState<ChannelInfo>({
    description: '',
    category: '',
  });

  useEffect(() => {
    getChannelInfo().then((channelInfo) => {
      setChannelInfo(channelInfo);
    });
  }, []);

  const handleOnChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setChannelInfo((prev) => ({ ...prev, description: target.value }));
  };

  const handleOptionChange = (option: Option) => {
    setChannelInfo((prev) => ({ ...prev, category: option.value }));
  };

  const saveChannelInfo = () => {
    editChannelInfo({ description, category }).then(({ status, statusText }) => {
      if (status === 200) {
        notify.success('채널 정보가 수정되었습니다!');
        router.replace(ROUTING_PATH.MY_PAGE);
      } else {
        notify.error('채널 정보 저장에 실패했습니다!');
      }
    });
  };

  return (
    <>
      <Layout.Header
        title="자기소개 작성하기"
        leftMenu={
          <Link href={'/my-page'}>
            <Icon type="leftDirection" />
          </Link>
        }
      />
      <Layout.Main isSpacing={false}>
        <div className="flex h-full w-full flex-col items-center gap-8">
          <TipBanner type="channel" />
          <div className={`flex w-full flex-col gap-2 px-4`}>
            <div className="w-full text-body1 font-semibold text-gray-900">
              채널을 소개해주세요<span className="text-gray-400"> *</span>
            </div>
            <TextArea
              defaultValue={description}
              placeholder="예시) 30대 여자의 뚜벅이 제주도 한달살이 브이로그를 공유하는 채널입니다."
              onChange={handleOnChange}
            />
          </div>
          <div className={`flex w-full flex-col gap-2 px-4`}>
            <div className="w-full text-body1 font-semibold text-gray-900">
              만들고 싶은 영상의 카테고리를 알려주세요<span className="text-gray-400"> *</span>
            </div>
            <Dropdown
              placeholder="카테고리를 선택해주세요"
              defaultOption={{ value: category, label: category }}
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
          수정하기
        </Button>
      </Layout.BottomMenu>
    </>
  );
};

export default ChannelInfo;
