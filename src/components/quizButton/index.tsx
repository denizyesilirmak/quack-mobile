import { Pressable } from 'react-native';
import styles from './styles';
import Text from '@components/text';

type QuizButtonProps = {
  text: string;
};

const QuizButton = ({ text }: QuizButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? 'red' : 'white',
        },
      ]}>
      <Text size="md">{text}</Text>
    </Pressable>
  );
};

export default QuizButton;
