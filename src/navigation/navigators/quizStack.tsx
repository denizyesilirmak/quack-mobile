import { QuizStackParamList, QuizStackRoutesType } from '@navigation/types';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '@screens/quiz';

const Stack = createStackNavigator<QuizStackParamList>();

const screens: Array<QuizStackRoutesType> = [
  {
    name: 'Quiz',
    component: QuizScreen,
    options: {
      headerShown: false,
    },
  },
];

const QuizStack = () => {
  return (
    <Stack.Navigator>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default QuizStack;
