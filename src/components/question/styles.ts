import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    flex: 1,
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    minHeight: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  question: {
    textAlign: 'center',
  },
  optionButton: {
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default styles;
