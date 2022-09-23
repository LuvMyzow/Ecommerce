import React, {useContext} from 'react';
import {ScrollView} from 'native-base';
import {Platform} from 'react-native';
import {Box, VStack, HStack, Image} from 'native-base';
import CommonHeader from '../components/CommonHeader';
import CustomText from '../components/CustomText';
import {ThemeContext} from '../context/ThemeContext';

const ProductDetailsScreen = () => {
  let paddingTop = Platform.OS === 'android' ? 0 : 36;
  const {currentTheme} = useContext(ThemeContext);
  return (
    <ScrollView
      h="full"
      w="full"
      style={{
        paddingTop: paddingTop,
      }}>
      {/* Header  */}
      <CommonHeader title="Product Details" />
      {/* Product Details */}
      <Box w="full" bg="muted.100" position="relative">
        {/* Product Main Image */}
        <Box w="full" h="80" px="4" pb="10">
          <Image
            w="3/4"
            h="full"
            resizeMode="cover"
            source={require('../assets/icons/h1.png')}
            alt="Product Image"
          />
        </Box>
        {/* Product Images Addiotional */}
        <VStack position="absolute" right="4" top="4" space="2">
          <Box
            shadow="1"
            h="16"
            w="16"
            borderRadius="md"
            bg="muted.200"
            d="flex"
            alignItems="center"
            justifyContent="center">
            <Image
              h="12"
              w="12"
              source={require('../assets/icons/h1.png')}
              alt="Product Image"
            />
          </Box>
          <Box
            shadow="1"
            h="16"
            w="16"
            borderRadius="md"
            bg="muted.200"
            d="flex"
            alignItems="center"
            justifyContent="center">
            <Image
              h="12"
              w="12"
              source={require('../assets/icons/h2.png')}
              alt="Product Image"
            />
          </Box>
          <Box
            shadow="1"
            h="16"
            w="16"
            borderRadius="md"
            bg="muted.200"
            d="flex"
            alignItems="center"
            justifyContent="center">
            <Image
              h="12"
              w="12"
              source={require('../assets/icons/h3.png')}
              alt="Product Image"
            />
          </Box>
        </VStack>
        {/* Product Images current image dots */}
        <HStack space="4" position="absolute" bottom="3" alignSelf="center">
          <Box h="2" w="2" rounded="full" bg="muted.300"></Box>
          <Box h="2" w="8" rounded="full" bg="blueGray.800"></Box>
          <Box h="2" w="2" rounded="full" bg="muted.300"></Box>
        </HStack>
      </Box>
      <HStack justifyContent="space-between" p="4">
        <Box bg="tertiary.400" px="2" py="1" rounded="md" maxHeight="6">
          <CustomText
            text="Free Shipping"
            fontFamily={currentTheme.fonts.bold}
            fontSize="12"
            color="#fff"
          />
        </Box>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          h="8"
          w="8"
          pt="1"
          rounded="full"
          borderWidth="1"
          borderColor="muted.300">
          <Image
            h="4"
            w="4"
            tintColor="muted.300"
            source={require('../assets/icons/heart.png')}
            alt="Heart Icon"
          />
        </Box>
      </HStack>
      <VStack px="4">
        <CustomText
          text="Sony WH-1000XM4"
          fontFamily={currentTheme.fonts.bold}
          fontSize="32"
        />
        <CustomText
          fontSize="14"
          mt="2"
          color="muted.400"
          text="M1 brings incredible performance, custom technologies and amazing power efficiency to MacBook Air."
        />
      </VStack>
      <HStack></HStack>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
