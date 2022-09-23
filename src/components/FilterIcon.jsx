import React, {useContext} from 'react';
import {Box, Image} from 'native-base';
import {ThemeContext} from '../context/ThemeContext';

const FilterIcon = props => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <Box
      p="2"
      borderWidth="1"
      borderColor="gray.300"
      bg={currentTheme.backgroundColor}
      borderRadius="md"
      {...props}
      w="12">
      <Image
        source={require('../assets/icons/option.png')}
        h="8"
        w="8"
        alt="BackIcon"
      />
    </Box>
  );
};

export default FilterIcon;
