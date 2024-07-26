import Layout from '@components/Layout';
import Image from 'next/image';

const ERROR_IMAGE_URL = 'assets/images/error.svg';

const ErrorLayout = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <>
      <Layout.Header rightMenu="home" />
      <div className="flex h-full w-full select-none flex-col items-center justify-center gap-6">
        <Image
          className="max-w-89 max-h-89 h-full w-auto"
          width="0"
          height="0"
          alt="error_image"
          src={ERROR_IMAGE_URL}
        />
        <div className="text-footnote text-gray-600">{errorMsg}</div>
        <div className="text-h4 font-bold">무언가 잘못되었어요</div>
      </div>
    </>
  );
};

export default ErrorLayout;
