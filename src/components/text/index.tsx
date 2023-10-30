import { Text as RNText } from 'react-native';
import { TextProps } from './types';

const textSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 20,
  xl: 24,
};

const Text = ({ children, size, style, color }: TextProps) => {
  return (
    <RNText
      style={{
        fontFamily: 'VarelaRound-Regular',
        fontSize: textSizes[size || 'sm'],
        ...(style as object),
        color: color || '#000000',
      }}>
      {children}
    </RNText>
  );
};

export default Text;
