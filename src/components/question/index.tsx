import QuizButton from '@components/quizButton';
import Text from '@components/text';
import { Image, View } from 'react-native';
import styles from './styles';

const Question = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg/640px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg',
          }}
          style={styles.image}
        />
        <Text size="lg" style={styles.question}>
          What year Alan Turing invented the enigma machine?
        </Text>
      </View>

      <QuizButton text="1940" />
      <QuizButton text="1940" />
      <QuizButton text="1940" />
      <QuizButton text="1940" />
    </View>
  );
};

export default Question;
