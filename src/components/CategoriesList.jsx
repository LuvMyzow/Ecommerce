import React from 'react';
import {Box, FlatList} from 'native-base';
import FilterIcon from './FilterIcon';
import CategoriesListItem from './CategoriesListItem';

const CategoriesList = () => {
  let flatListItems = [
    'Headphones',
    'Bluetooths',
    'Mouse',
    'Earphones',
    'Speakers',
    'Mobiles',
    'Macbook',
  ];
  return (
    <Box
      px="4"
      my="1"
      d="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between">
      <FilterIcon />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={flatListItems}
        ml="1"
        renderItem={({item}) => <CategoriesListItem category={item} />}
      />
    </Box>
  );
};

export default CategoriesList;
