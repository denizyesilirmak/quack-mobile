import { RouteConfig, StackNavigationState } from '@react-navigation/native';

import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import type {
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack';

//Define the types for the AuthStackParamList

type AuthStackParamList = {
  Login: undefined;
};

type AuthStackRoutesType = RouteConfig<
  AuthStackParamList,
  keyof AuthStackParamList,
  StackNavigationState<AuthStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;

// Define the types for the AppStackParamList

type AppStackParamList = {
  Auth: undefined;
  Main: undefined;
};

type AppStackRoutesType = RouteConfig<
  AppStackParamList,
  keyof AppStackParamList,
  StackNavigationState<AppStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;

// Define the types for the MainBottomTabParamList

type MainBottomTabParamList = {
  Home: undefined;
};

type MainBottomTabRoutesType = RouteConfig<
  MainBottomTabParamList,
  keyof MainBottomTabParamList,
  any,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap
>;

type QuizStackParamList = {
  Quiz: undefined;
};

type QuizStackRoutesType = RouteConfig<
  QuizStackParamList,
  keyof QuizStackParamList,
  StackNavigationState<QuizStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;

export type {
  AppStackParamList,
  AppStackRoutesType,
  MainBottomTabRoutesType,
  MainBottomTabParamList,
  QuizStackParamList,
  QuizStackRoutesType,
  AuthStackParamList,
  AuthStackRoutesType,
};
