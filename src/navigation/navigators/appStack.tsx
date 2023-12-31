import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainBottomTab from './mainBottomTab';
import { AppStackParamList, AppStackRoutesType } from '@navigation/types';
import AuthStack from './authStack';

const Stack = createStackNavigator<AppStackParamList>();

const screens: Array<AppStackRoutesType> = [
  {
    name: 'Auth',
    component: AuthStack,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Main',
    component: MainBottomTab,
    options: {
      headerShown: false,
    },
  },
];

const AppStack = () => {
  return (
    <Stack.Navigator>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default AppStack;
