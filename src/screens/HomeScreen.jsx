import React from 'react';
import {StatusBar, ScrollView} from 'native-base';
import {Platform} from 'react-native';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import {Divider} from 'native-base';
import ProductsList from '../components/ProductList';

const HomeScreen = ({navigation}) => {
  let paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 36;
  let flatListData = [
    {
      name: 'Macbook Air M1',
      price: '$ 150',
      description:
        'M1 brings incredible performance, custom technologies and amazing power efficiency to MacBook Air.',
      bgColor: 'primary.100',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
    },
    {
      name: 'Macbook Pro M1',
      price: '$ 170',
      description:
        'M1 brings incredible performance, custom technologies and amazing power efficiency to MacBook Air.',
      bgColor: 'secondary.100',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
    },
    {
      name: 'Macbook Pro Max M1',
      price: '$ 190',
      description:
        'M1 brings incredible performance, custom technologies and amazing power efficiency to MacBook Air.',
      bgColor: 'tertiary.100',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
    },
  ];
  return (
    <ScrollView
      h="full"
      w="full"
      style={{
        paddingTop: paddingTop,
      }}>
      <Header />
      <CategoriesList />
      <Divider mt="3" />
      <ProductsList
        title="Hot Deals"
        flatListData={flatListData}
        navigation={navigation}
      />
      <ProductsList
        title="Best Selling"
        flatListData={flatListData}
        navigation={navigation}
      />
      <ProductsList
        title="Top Rated"
        flatListData={flatListData}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HomeScreen;
