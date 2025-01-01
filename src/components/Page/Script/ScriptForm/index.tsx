import { scriptLengthOptions, TONE } from '@app/script/constants';
import Button from '@components/common/Button';
import Dropdown, { Option } from '@components/common/DropDown';
import TextArea from '@components/common/TextArea';
import TextField from '@components/common/TextField';
import { useIdeaState } from '@store/idea';
import { useScriptAction, useScriptState } from '@store/script';
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';

interface ScriptFormProps {
  setIsDone: Dispatch<SetStateAction<boolean>>;
}

const ScriptForm = ({ setIsDone }: ScriptFormProps) => {
  const { idea, tone, essential } = useScriptState();
  const { setScriptState } = useScriptAction();
  const { selectedIdea } = useIdeaState();

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
    setIsDone(
      idea.length >= 10 && idea.length <= 30 && essential.length >= 10 && essential.length <= 500,
    );
  }, [idea, essential]);

  return (
    <div className="flex h-fit w-full flex-col items-center gap-8 px-4 py-7">
      <div className={`flex w-full flex-col gap-2`}>
        <div className="w-full text-body1 font-semibold text-gray-900">
          아이디어를 입력해주세요<span className="text-gray-400"> *</span>
        </div>
        <TextField
          defaultValue={idea}
          placeholder="예시) 섭지코지에서 산책하며 자연 경관 감상"
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
          placeholder="예시) 섭지코지는 유채꽃이 만발해서 인생샷을 찍을 수 있는 ‘사진 맛집’으로 유명하다는 내용이 들어가면 좋겠어요. 바닷가를 따라 산책로를 걸으며 일몰을 보여주면서 30분 정도 소요된다는 것과 일출과 일몰 시간대에 와서 구경하는 것을 추천하는내용의 꿀팁을 제공하면 좋겠어요."
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
    </div>
  );
};

export default ScriptForm;
