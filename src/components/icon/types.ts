import icons from '@constants/icons';

type sizeTypes = 'small' | 'medium' | 'large';

type IconProps = {
  name: keyof typeof icons;
  size?: sizeTypes;
};

export type { IconProps, sizeTypes };
