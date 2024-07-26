interface ProgressBarProps {
  min?: number;
  max?: number;
  current: number;
}

const DEFAULT_MIN_PERCENTAGE = 0;
const DEFAULT_MAX_PERCENTAGE = 6;

const getCurrentPercentage = (min: number, max: number, current: number) =>
  (Math.max(Math.min(current, max), min) / max) * 100;

const ProgressBar = ({
  min = DEFAULT_MIN_PERCENTAGE,
  max = DEFAULT_MAX_PERCENTAGE,
  current,
}: ProgressBarProps) => {
  return (
    <div className="flex h-fit w-full items-center justify-center gap-2">
      <div className="h-2 w-full overflow-hidden rounded-lg bg-gray-50">
        <div
          className={`h-full rounded-lg bg-primary-500 text-left transition-all ease-in-out`}
          style={{
            width: `${getCurrentPercentage(min, max, current)}%`,
          }}
        >
          <span></span>
        </div>
      </div>
      <span className="text-footnote text-gray-500">{`${Math.min(current, max)}/${max}`}</span>
    </div>
  );
};

export default ProgressBar;
