interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-black px-6 py-2 text-body2 text-white opacity-70">
      {message}
    </div>
  );
};

export default Toast;
