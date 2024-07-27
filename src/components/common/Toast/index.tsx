'use client';

import { ToastContainer } from 'react-toastify';

interface ToastProps {
  message: string;
}

const options = {
  autoClose: 2000,
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

// autoClose={3000}
export const ToastProvider = () => {
  return (
    <ToastContainer
      className={'flex w-full items-center justify-center'}
      toastClassName={(context) =>
        contextClass[context?.type || 'default'] +
        ' relative flex p-1 min-h-10 rounded-md justify-center overflow-hidden cursor-pointer opacity-70 h-fit w-fit items-center rounded-lg'
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

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-black px-6 py-2 text-body2 text-white opacity-70">
      {message}
    </div>
  );
};

export default Toast;
