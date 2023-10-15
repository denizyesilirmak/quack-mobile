import React from 'react';
import { View } from 'react-native';
import Home from 'screens/home';

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Home />
    </View>
  );
};

export default App;
