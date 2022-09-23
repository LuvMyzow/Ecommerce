import 'react-native-gesture-handler';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ThemeProvider} from './src/context/ThemeContext';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;
