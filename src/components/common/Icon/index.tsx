import SvgComponents from '@components/common/Icon/SvgComponents';

type IconProps = {
  size?: keyof typeof iconSize;
  type: keyof typeof SvgComponents;
  fill?: `#${number}` | 'none';
  color?: `#${string}`;
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
  return <Component viewBox="0 0 26 26" color={color} {...iconSize[size]} {...props} />;
};

export default Icon;
