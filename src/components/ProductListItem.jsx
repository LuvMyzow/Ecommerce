import React, {useContext} from 'react';
import {Box, HStack, Image, Pressable, VStack} from 'native-base';
import CustomText from './CustomText';
import {ThemeContext} from '../context/ThemeContext';

const ProductListItem = ({product, navigation}) => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <Pressable onPress={() => navigation.navigate('ProductDetailsScreen')}>
      <VStack w="48" mr="4" space="1" mt="4">
        <Box
          w="full"
          h="48"
          bg={product.bgColor}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative">
          <Image
            alt="ProductImage"
            h="32"
            w="40"
            source={{uri: product.image}}
          />
          <Box
            position="absolute"
            bg="darkBlue.900"
            px="2"
            py="1"
            borderRadius="md"
            left="1"
            bottom="1">
            <CustomText
              text="Free Shipping"
              fontFamily={currentTheme.fonts.bold}
              fontSize="10"
              color="light.50"
            />
          </Box>
        </Box>
        <HStack justifyContent="space-between" mt="2">
          <CustomText
            text={product.name}
            fontFamily={currentTheme.fonts.bold}
          />
          <CustomText
            text={product.price}
            fontFamily={currentTheme.fonts.bold}
          />
        </HStack>
        <Box>
          <CustomText
            text={
              product.description.length > 60
                ? product.description.substring(0, 60) + '...'
                : product.description.length
            }
            color="muted.400"
          />
        </Box>
      </VStack>
    </Pressable>
  );
};

export default ProductListItem;
