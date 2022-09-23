import React, {useContext} from 'react';
import {Box, HStack, Pressable} from 'native-base';
import BackButton from './BackButton';
import CustomText from './CustomText';
import {ThemeContext} from '../context/ThemeContext';

const CommonHeader = ({title}) => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <HStack
      justifyContent="space-between"
      w="full"
      alignItems="center"
      px="4"
      py="4">
      <BackButton />
      <CustomText
        text={title}
        fontSize="16"
        fontFamily={currentTheme.fonts.bold}
      />
      <Box />
    </HStack>
  );
};

export default CommonHeader;
