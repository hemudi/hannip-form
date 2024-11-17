import GoogleAnalytics from '@components/WebAnalytics/GoogleAnalytics';
import GoogleTagManager from '@components/WebAnalytics/GoogleTagManager';

const WebAnalytics = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER ? (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
      ) : null}
    </>
  );
};

export default WebAnalytics;
