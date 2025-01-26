'use client';

import { Flip, toast, ToastContainer } from 'react-toastify';

const options = {
  autoClose: 1,
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

export const notify = {
  success: (msg: string) => {
    toast.clearWaitingQueue();
    toast.success(msg);
  },
  error: (msg: string) => {
    toast.clearWaitingQueue();
    toast.error(msg);
  },
};

export const ToastProvider = () => {
  return (
    <ToastContainer
      transition={Flip}
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
