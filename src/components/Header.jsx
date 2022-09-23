import React, {useContext} from 'react';
import {Box, Image} from 'native-base';
import {ThemeContext} from '../context/ThemeContext';
import CustomText from './CustomText';

const Header = () => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <Box w="full" d="flex" flexDir="row" p="4" justifyContent="space-between">
      <Box
        p="4"
        shadow="1"
        bg={currentTheme.backgroundColor}
        borderRadius="md"
        w="12">
        <Image
          source={require('../assets/icons/back.png')}
          h="4"
          w="4"
          alt="BackIcon"
        />
      </Box>
      <Box
        d="flex"
        alignItems="center"
        flexDir="row"
        justifyContent="space-between"
        bg={currentTheme.searchBarBackgroundColor}
        w="5/6"
        h="full"
        shadow="1"
        borderRadius="md"
        px="4">
        <CustomText
          text="Search for a product,cloth..."
          fontSize="16"
          color="gray.400"
        />
        <Image
          source={require('../assets/icons/magnifying-glass.png')}
          h="8"
          w="8"
          alt="Search Icon"
          tintColor="gray.400"
        />
      </Box>
    </Box>
  );
};

export default Header;
