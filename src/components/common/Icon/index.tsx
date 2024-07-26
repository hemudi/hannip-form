import SvgComponents from '@components/common/Icon/SvgComponents';

export type IconType = keyof typeof SvgComponents;

type IconProps = {
  size?: keyof typeof iconSize;
  type: IconType;
  fill?: `#${number}` | 'none';
  color?: `#${string}`;
  viewBox?: string;
  className?: string;
};

const iconSize = {
  small: {
    width: '12',
    height: '12',
  },
  medium: {
    width: '24',
    height: '24',
  },
} as const;

const Icon = ({ type = 'leftArrow', size = 'medium', color = '#121212', ...props }: IconProps) => {
  const Component = SvgComponents[type];
  const viewBox = type === 'check' ? '0 0 26 26' : '0 0 24 24';
  return <Component viewBox={viewBox} color={color} {...iconSize[size]} {...props} />;
};

export default Icon;
