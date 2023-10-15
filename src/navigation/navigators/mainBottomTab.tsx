import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//TODO: Import using alias
import Home from '../../screens/home';

const Tabs = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
};

export default MainBottomTab;
