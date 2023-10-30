import { StyleProp, TextStyle } from 'react-native';

type TextProps = {
  children: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: StyleProp<TextStyle>;
  color?: string;
};

export type { TextProps };
