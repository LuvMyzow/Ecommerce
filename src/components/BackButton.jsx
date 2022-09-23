import React from 'react';
import {Pressable, Image} from 'native-base';

const BackButton = props => {
  let {onPress, imageProps, pressableProps} = props;
  return (
    <Pressable onPress={onPress} {...pressableProps}>
      <Image
        source={require('../assets/icons/back.png')}
        h="4"
        w="4"
        alt="BackButton"
        {...imageProps}
      />
    </Pressable>
  );
};

export default BackButton;
