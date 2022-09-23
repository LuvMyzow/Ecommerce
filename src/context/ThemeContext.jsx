import React, {createContext} from 'react';
import {useColorScheme} from 'react-native';
import {lightTheme, darkTheme} from '../assets/theme';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  let mode = useColorScheme();
  let currentTheme = mode === 'light' ? lightTheme : darkTheme;
  let contextValues = {
    currentTheme,
  };
  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
