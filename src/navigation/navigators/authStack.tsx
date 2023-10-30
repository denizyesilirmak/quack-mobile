import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/login';

const Stack = createStackNavigator();

const screens = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
];

const AuthStack = () => {
  return (
    <Stack.Navigator>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
