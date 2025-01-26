import { checkChannelInfo } from '@apis/user';
import { scriptLengthOptions, TONE } from '@app/script/constants';
import BooleanSelector, { BooleanSelectorHandle } from '@components/common/BooleanSelector';
import Button from '@components/common/Button';
import Dropdown, { Option } from '@components/common/DropDown';
import Modal from '@components/common/Modal';
import TextArea from '@components/common/TextArea';
import TextField from '@components/common/TextField';
import LoginModal from '@components/Page/Login/LoginModal';
import { COOKIE_NAME } from '@constants/cookieName';
import { ROUTING_PATH } from '@constants/routingPath';
import { useScriptAction, useScriptState } from '@store/script';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ScriptFormProps {
  setIsDone: Dispatch<SetStateAction<boolean>>;
}

const ScriptForm = ({ setIsDone }: ScriptFormProps) => {
  const [isLogin, setIsLogin] = useState<boolean>();
  const [isLoginShow, setIsLoginShow] = useState<boolean>(false);
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isExistChannelInfo, setIsExistChannelInfo] = useState<boolean>(false);
  const { idea, tone, essential, createdIdea } = useScriptState();
  const { setScriptState, clearScriptState } = useScriptAction();
  const selectorRef = useRef<BooleanSelectorHandle>(null);

  const handleOnChangeIdea = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setScriptState({ idea: target.value });
  };

  const handleOptionChange = (option: Option) => {
    setScriptState({ length: option.value });
  };

  const handleOnChangeEssential = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setScriptState({ essential: target.value });
  };

  const handleOnChangeTone = (tone: string) => {
    setScriptState({ tone });
  };

  useEffect(() => {
    setIsLogin(Boolean(getCookie(COOKIE_NAME.ACCESS)));
    clearScriptState();
    if (createdIdea && createdIdea !== '') {
      setScriptState({ idea: createdIdea });
    }
    return () => {
      setScriptState({ createdIdea: '' });
    };
  }, []);

  useEffect(() => {
    if (isLogin) {
      checkChannelInfo().then((isExist) => setIsExistChannelInfo(isExist));
    }
  }, [isLogin]);

  useEffect(() => {
    setIsDone(
      idea.length >= 10 && idea.length <= 30 && essential.length >= 10 && essential.length <= 500,
    );
  }, [idea, essential]);

  const handleOnCloseModal = (type: 'login' | 'channel') => {
    if (selectorRef.current) {
      selectorRef.current.setValue(false);
    }

    if (type === 'login') {
      setIsLoginShow((prev) => !prev);
      return;
    }

    if (type === 'channel') {
      setIsModalShow((prev) => !prev);
      return;
    }
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

    setScriptState({ isReflectedChannelInfo });
  };

  const clickModal = () => setIsModalShow((prev) => !prev);

  return (
    <div className="flex h-fit w-full flex-col items-center gap-8 px-4 py-7">
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          아이디어를 입력해주세요<span className="text-gray-400"> *</span>
        </div>
        <TextField
          defaultValue={createdIdea}
          placeholder="예시) 제주도 한달살기 후 추천하는 명소들  "
          onChange={handleOnChangeIdea}
          validateValue={(value) => value.length >= 10 && value.length <= 30}
          helperMsg="최소 10자, 최대 30자 이내 (공백포함)"
        />
      </div>
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          영상 길이를 선택해주세요<span className="text-gray-400"> *</span>
        </div>
        <Dropdown
          placeholder="영상 길이를 선택해주세요"
          defaultOption={scriptLengthOptions[0]}
          options={scriptLengthOptions}
          handleOptionChange={handleOptionChange}
        />
      </div>
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          스크립트에 꼭 들어가야할 내용을 작성해주세요<span className="text-gray-400"> *</span>
        </div>
        <TextArea
          defaultValue={essential}
          placeholder="예시) 제주도 명소 중에서도 포토존 위주로 추천을 해주세요. 잘 알려진 곳이 아닌 제주도 현지인만 아는 명소였으면 좋겠어요. 차 없이도 편하게 갈 수 있는 곳 위주로 알려주세요."
          onChange={handleOnChangeEssential}
          validateValue={(value) => value.length >= 10 && value.length <= 500}
          helperMsg="최소 10자, 최대 500자 이내 (공백포함)"
        />
      </div>
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          존댓말 여부를 선택해주세요<span className="text-gray-400"> *</span>
        </div>
        <div className="flex w-full cursor-pointer gap-2">
          <Button
            onClick={() => handleOnChangeTone(TONE.FORMAL)}
            color={tone === TONE.FORMAL ? 'black' : 'disabled'}
          >
            존댓말
          </Button>
          <Button
            onClick={() => handleOnChangeTone(TONE.INFORMAL)}
            color={tone === TONE.INFORMAL ? 'black' : 'disabled'}
          >
            반말
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="w-full text-body1 font-semibold text-gray-900">
          채널 정보를 불러와 반영하시겠습니까?<span className="text-gray-400"> *</span>
        </div>
        <BooleanSelector onChange={handleOnClick} ref={selectorRef} />
        <span className="px-1 text-footnote text-gray-500">
          채널 정보가 있으면 나에게 맞춤 아이디어를 제공받을 수 있어요.
        </span>
      </div>
      <LoginModal
        isShow={isLoginShow}
        warningText={`채널 정보 불러오기는`}
        clickModal={() => handleOnCloseModal('login')}
      />
      {isModalShow && (
        <Modal
          title={`채널 정보가 없어요!\n맞춤 아이디어를 위해 작성해주세요.`}
          onClose={() => handleOnCloseModal('channel')}
        >
          <Link className="flex h-fit w-full flex-col gap-2" href={ROUTING_PATH.CHANNEL_INFO}>
            <Button>채널 정보 작성하러가기</Button>
          </Link>
        </Modal>
      )}
    </div>
  );
};

export default ScriptForm;
