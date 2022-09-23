import React, {useContext} from 'react';
import {Box, Image} from 'native-base';
import {ThemeContext} from '../context/ThemeContext';
import CustomText from './CustomText';

const CategoriesListItem = ({category}) => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <Box
      borderRadius="md"
      h="12"
      minWidth="32"
      px="2"
      borderWidth="1"
      borderColor="gray.300"
      mx="2"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between">
      <Box h="10" w="10" borderRadius="md" bg="gray.200" mr="2">
        <Image
          source={require('../assets/icons/headphone.png')}
          h="full"
          w="full"
          alt="BackIcon"
        />
      </Box>
      <CustomText text={category} fontFamily={currentTheme.fonts.bold} />
    </Box>
  );
};

export default CategoriesListItem;
