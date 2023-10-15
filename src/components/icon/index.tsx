import { Image } from 'react-native';
import Icons from '@constants/icons';
import { IconProps } from './types';

const Icon = ({ name }: IconProps) => {
  return <Image source={Icons[name]} />;
};

export default Icon;
