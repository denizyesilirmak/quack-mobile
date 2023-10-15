import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  MainBottomTabParamList,
  MainBottomTabRoutesType,
} from '@navigation/types';

//TODO: Import using alias
import Home from '../../screens/home';

const Tabs = createBottomTabNavigator<MainBottomTabParamList>();

const screens: Array<MainBottomTabRoutesType> = [
  {
    name: 'Home',
    component: Home,
  },
];

const MainBottomTab = () => {
  return (
    <Tabs.Navigator>
      {screens.map(screen => (
        <Tabs.Screen key={screen.name} {...screen} />
      ))}
    </Tabs.Navigator>
  );
};

export default MainBottomTab;
