import Accordion from '@components/common/Accordion';

const ADVICE_TITLE = '숏폼 제작을 위한 팁이에요!';

const Advice = ({ advice }: { advice: string }) => {
  return (
    <Accordion title={ADVICE_TITLE}>
      <div className="flex h-fit w-full items-center justify-center whitespace-pre-line rounded-lg bg-gray-50 p-4 text-body2">
        {advice}
      </div>
    </Accordion>
  );
};

export default Advice;
