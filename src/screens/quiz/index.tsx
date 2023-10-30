import Question from '@components/question';
import { View } from 'react-native';

const QuizScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '80%',
          height: '80%',
          backgroundColor: '#dddddd',
          borderRadius: 10,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 3,
          },
          shadowOpacity: 0.1,
        }}>
        <Question />
      </View>
    </View>
  );
};

export default QuizScreen;
