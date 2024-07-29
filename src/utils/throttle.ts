type ThrottleFunction = (...args: any[]) => void;

const throttle = (func: ThrottleFunction, ms: number): ThrottleFunction => {
  let throttled = false;

  return (...args: any[]): void => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, ms);
    }
  };
};

export default throttle;
