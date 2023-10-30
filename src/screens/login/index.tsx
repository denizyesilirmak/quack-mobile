import ScreenView from '@components/screenView';
import Text from '@components/text';
import { View } from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  return (
    <ScreenView
      style={{
        backgroundColor: '#000000',
      }}>
      <View style={styles.container}></View>
    </ScreenView>
  );
};

export default LoginScreen;
