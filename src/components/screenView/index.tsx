import { ScrollView, ViewStyle } from 'react-native';
import styles from './styles';

type ScreenViewProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollable?: boolean;
};

const ScreenView = ({
  children,
  style,
  scrollable = false,
}: ScreenViewProps) => {
  return (
    <ScrollView
      scrollEnabled={scrollable}
      contentContainerStyle={styles.contentContainer}
      style={[styles.container, style]}>
      {children}
    </ScrollView>
  );
};

export default ScreenView;
