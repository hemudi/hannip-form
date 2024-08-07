import Accordion from '@components/common/Accordion';
import Image from 'next/image';

const ADVICE_TITLE = '숏폼 제작을 위한 팁이에요!';

const LOADING_SPINNER_PATH = '/assets/images/loading_spinner.svg';

const Advice = ({ advice, isRetry }: { advice: string; isRetry: boolean }) => {
  return (
    <Accordion title={ADVICE_TITLE}>
      {isRetry ? (
        <div className="flex h-fit w-full items-center justify-center bg-white p-4">
          <Image className="w-fit" width="0" height="0" alt="loading" src={LOADING_SPINNER_PATH} />
        </div>
      ) : (
        <div className="flex h-fit w-full items-center justify-center whitespace-pre-line rounded-lg bg-gray-50 p-4 text-body2">
          {advice}
        </div>
      )}
    </Accordion>
  );
};

export default Advice;
