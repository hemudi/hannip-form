/* eslint-disable @next/next/no-img-element */
interface ProfileImageProps {
  src: string;
  alt?: string;
}

const ProfileImage = ({ src, alt = '' }: ProfileImageProps) => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-full bg-primary-200">
      <img src={src} alt={alt} className="pointer-events-none h-full w-full select-none" />
    </div>
  );
};

export default ProfileImage;
