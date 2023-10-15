import {Text as RNText} from 'react-native';
import {TextProps} from './types';

const Text = ({children}: TextProps) => {
  return <RNText>{children}</RNText>;
};

export default Text;
