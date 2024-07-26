import Image from 'next/image';

const ERROR_IMAGE_URL = 'assets/images/loading.svg';

const ResultLoading = () => {
  return (
    <>
      <div className="flex h-full w-full select-none flex-col items-center justify-center gap-6">
        <Image
          className="max-w-89 max-h-89 h-full w-auto animate-bounce"
          width="0"
          height="0"
          alt="error_image"
          src={ERROR_IMAGE_URL}
        />
        <div className="text-footnote text-gray-600">LOADING...</div>
        <div className="text-h4 font-bold">스크립트가 구워지고 있어요</div>
      </div>
    </>
  );
};

export default ResultLoading;
