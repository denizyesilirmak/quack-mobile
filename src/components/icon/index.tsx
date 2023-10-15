import { Image } from 'react-native';
import Icons from '@constants/icons';
import { IconProps } from './types';

const sizes = {
  small: 24,
  medium: 32,
  large: 48,
};

const Icon = ({ name, size }: IconProps) => {
  return (
    <Image
      style={{
        width: sizes[size || 'medium'],
        height: sizes[size || 'medium'],
      }}
      source={Icons[name]}
    />
  );
};

export default Icon;
