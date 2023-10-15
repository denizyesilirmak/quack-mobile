import { RouteConfig, StackNavigationState } from '@react-navigation/native';

import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import type {
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack';

// Define the types for the AppStackParamList

type AppStackParamList = {
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

export type {
  AppStackParamList,
  AppStackRoutesType,
  MainBottomTabRoutesType,
  MainBottomTabParamList,
};
