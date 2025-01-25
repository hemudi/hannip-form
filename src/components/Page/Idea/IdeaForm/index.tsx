import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

import TextArea from '@components/common/TextArea';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import LoginModal from '@components/Page/Login/LoginModal';
import Modal from '@components/common/Modal';
import Link from 'next/link';
import { ROUTING_PATH } from '@constants/routingPath';
import BooleanSelector from '@components/common/BooleanSelector';
import { checkChannelInfo } from '@apis/user';
import { useIdeaAction, useIdeaState } from '@store/idea';
import Button from '@components/common/Button';

interface IdeaFormProps {
  setIsDone: Dispatch<SetStateAction<boolean>>;
}

const IdeaForm = ({ setIsDone }: IdeaFormProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoginShow, setIsLoginShow] = useState<boolean>(false);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isExistChannelInfo, setIsExistChannelInfo] = useState<boolean>(false);
  const { content } = useIdeaState();
  const { setIdeaState } = useIdeaAction();

  useEffect(() => {
    setIsLogin(Boolean(getCookie(COOKIE_NAME.ACCESS)));
  }, []);

  useEffect(() => {
    if (isLogin) {
      checkChannelInfo().then((isExist) => setIsExistChannelInfo(isExist));
    }
  }, [isLogin]);

  useEffect(() => {
    setIsDone(content.length >= 10 && content.length <= 100);
  }, [content]);

  const handleOnChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setIdeaState({ content: target.value });
  };

  const handleOnClick = (isReflectedChannelInfo: boolean) => {
    if (!isLogin) {
      setIsLoginShow(true);
      return;
    }

    if (!isExistChannelInfo && isReflectedChannelInfo) {
      clickModal();
      return;
    }

    setIdeaState({ isReflectedChannelInfo });
  };

  const clickModal = () => setIsModalShow((prev) => !prev);

  return (
    <div className="flex h-full w-full flex-col items-center gap-8">
      <h1 className="w-full text-h3 font-semibold">아이디어 정보를 입력해주세요</h1>
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          아이디어에 반영될 주제가 있다면 작성해주세요<span className="text-gray-400"> *</span>
        </div>
        <TextArea
          defaultValue={content}
          placeholder="예시) 제주도 거제도에서 한달살이중인데 뚜벅이로 2박 3일동안 제주도 동부 여행 갔다올거라 여행코스 아이디어 추천해주세요."
          onChange={handleOnChange}
          validateValue={(value) => value.length >= 10 && value.length <= 100}
          helperMsg="최소 10자, 최대 300자 이내 (공백포함)"
        />
      </div>
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          채널 정보를 불러와 반영하시겠습니까?<span className="text-gray-400"> *</span>
        </div>
        <BooleanSelector onChange={handleOnClick} />
        <span className="px-1 text-footnote text-gray-500">
          채널 정보가 있으면 나에게 맞춤 아이디어를 제공받을 수 있어요.
        </span>
      </div>
      <LoginModal
        isShow={isLoginShow}
        warningText={`채널 정보 불러오기는`}
        clickModal={() => setIsLoginShow((prev) => !prev)}
      />
      {isModalShow && (
        <Modal
          title={`채널 정보가 없어요!\n맞춤 아이디어를 위해 작성해주세요.`}
          onClose={clickModal}
        >
          <Link className="flex h-fit w-full flex-col gap-2" href={ROUTING_PATH.CHANNEL_INFO}>
            <Button>채널 정보 작성하러가기</Button>
          </Link>
        </Modal>
      )}
    </div>
  );
};

export default IdeaForm;
