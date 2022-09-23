import React, {useContext} from 'react';
import {Text} from 'native-base';
import {ThemeContext} from '../context/ThemeContext';

const CustomText = props => {
  let {text, fontFamily} = props;
  const {currentTheme} = useContext(ThemeContext);
  return (
    <Text
      {...props}
      fontFamily={fontFamily ? fontFamily : currentTheme.fonts.regular}>
      {text}
    </Text>
  );
};

export default CustomText;
