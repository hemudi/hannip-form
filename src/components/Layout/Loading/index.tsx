import Image from 'next/image';

const IMAGE_URL = '/assets/images/loading.svg';
const DEFAULT_TEXT = '로딩중이에요';

interface LoadingProps {
  title: string;
}

const Loading = ({ title = DEFAULT_TEXT }: LoadingProps) => {
  return (
    <>
      <div className="flex h-full w-full select-none flex-col items-center justify-center gap-6 p-10">
        <Image
          className="h-auto w-full animate-loading"
          width="0"
          height="0"
          alt="error_image"
          src={IMAGE_URL}
        />
        <div className="text-h4 font-bold">{title}</div>
      </div>
    </>
  );
};

export default Loading;
