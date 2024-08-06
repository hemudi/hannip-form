import Image from 'next/image';

const ERROR_IMAGE_URL = '/assets/images/loading.svg';

const ResultLoading = () => {
  return (
    <>
      <div className="flex h-full w-full select-none flex-col items-center justify-center gap-6 p-10">
        <Image
          className="h-auto w-full animate-loading"
          width="0"
          height="0"
          alt="error_image"
          src={ERROR_IMAGE_URL}
        />
        <div className="text-h4 font-bold">스크립트가 구워지고 있어요</div>
      </div>
    </>
  );
};

export default ResultLoading;
