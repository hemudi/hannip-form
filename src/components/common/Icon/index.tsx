import SvgComponents from '@components/common/Icon/SvgComponents';

export type IconType = keyof typeof SvgComponents;

type IconProps = {
  size?: keyof typeof iconSize;
  type: IconType;
  fill?: `#${string}` | 'none';
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
  large: {
    width: '50',
    height: '50',
  },
} as const;

const Icon = ({ type = 'leftArrow', size = 'medium', color = '#121212', ...props }: IconProps) => {
  const Component = SvgComponents[type];
  return <Component color={color} {...iconSize[size]} {...props} />;
};

export default Icon;
