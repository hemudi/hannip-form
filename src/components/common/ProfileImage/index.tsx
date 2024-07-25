import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

const ProfileImage = ({ src, alt = '' }: ProfileImageProps) => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-full bg-primary-200">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className="pointer-events-none h-full w-full select-none"
      />
    </div>
  );
};

export default ProfileImage;
