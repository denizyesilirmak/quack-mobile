import {Text as RNText} from 'react-native';

type TextProps = {
  children: string;
};

const Text = ({children}: TextProps) => {
  return <RNText>{children}</RNText>;
};

export default Text;
