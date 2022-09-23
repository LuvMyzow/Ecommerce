import React, {useContext} from 'react';
import {Box, FlatList, HStack} from 'native-base';
import CustomText from './CustomText';
import {ThemeContext} from '../context/ThemeContext';
import ProductListItem from './ProductListItem';

const ProductsList = ({title, flatListData, navigation}) => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <Box w="full" p="4">
      <HStack w="full" justifyContent="space-between" alignItems="center">
        <CustomText
          text={title}
          fontSize="16"
          fontFamily={currentTheme.fonts.bold}
        />
        <CustomText
          text="See all"
          fontFamily={currentTheme.fonts.regular}
          color="gray.400"
          fontSize="16"
        />
      </HStack>
      <Box>
        <FlatList
          horizontal={true}
          data={flatListData}
          renderItem={({item}) => (
            <ProductListItem product={item} navigation={navigation} />
          )}
        />
      </Box>
    </Box>
  );
};

export default ProductsList;
