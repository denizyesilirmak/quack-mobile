import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  MainBottomTabParamList,
  MainBottomTabRoutesType,
} from '@navigation/types';

//TODO: Import using alias
import Home from '../../screens/home';
import Icon from '@components/icon';

const Tabs = createBottomTabNavigator<MainBottomTabParamList>();

const screens: Array<MainBottomTabRoutesType> = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: () => <Icon name="home" />,
    },
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
