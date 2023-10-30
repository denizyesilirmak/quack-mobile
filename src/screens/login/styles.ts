import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#ffffff40',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});

export default styles;
