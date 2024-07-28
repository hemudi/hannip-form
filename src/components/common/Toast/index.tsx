'use client';

import { ToastContainer } from 'react-toastify';

const options = {
  autoClose: 800,
  hideProgressBar: true,
  closeOnClick: true,
  closeButton: false,
  pauseOnHover: false,
  limit: 1,
};

const contextClass = {
  success: 'bg-black',
  error: 'bg-black',
  info: 'bg-black',
  warning: 'bg-black',
  default: 'bg-black',
  dark: 'bg-black',
};

export const ToastProvider = () => {
  return (
    <ToastContainer
      className={'flex w-full items-center justify-center'}
      toastClassName={(context) =>
        contextClass[context?.type || 'default'] +
        ' relative flex p-1 min-h-10 rounded-md justify-center overflow-hidden cursor-pointer opacity-90 h-fit w-fit items-center rounded-lg'
      }
      icon={<></>}
      bodyClassName={() =>
        'text-sm w-full h-full font-white font-med block px-6 py-2 text-body2 text-white"'
      }
      position="bottom-center"
      {...options}
    />
  );
};
