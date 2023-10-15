import { RouteConfig, StackNavigationState } from '@react-navigation/native';
import type {
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack';

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

export type { AppStackParamList, AppStackRoutesType };
