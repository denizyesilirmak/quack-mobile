import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigators/appStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
