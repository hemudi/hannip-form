export const DEVICE_TYPE = {
  MOBILE: 'mobile',
  WEB: 'web',
};

const detectDevice = () => {
  const userAgent = navigator.userAgent;

  if (/mobile/i.test(userAgent)) {
    return DEVICE_TYPE.MOBILE;
  } else {
    return DEVICE_TYPE.WEB;
  }
};

export default detectDevice;
