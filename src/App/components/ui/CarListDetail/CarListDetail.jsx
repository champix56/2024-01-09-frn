import React from 'react';
import {View, Text, Image} from 'react-native';

const CarListDetail = props => {
  return (
    <View>
      <Image
        src={require('../../../assets/images/car3D.png')}
        style={{width: '64'}}
      />
      <View>
        <View>
          <Text>
            {props.ref}::{props.model}
          </Text>
        </View>
        <View>
          <Text>{props.state}</Text>
        </View>
      </View>
    </View>
  );
};

export default CarListDetail;
