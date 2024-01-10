import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './CarListDetail.style';
const image = require('../../../assets/images/car3D.png');
const CarListDetail = props => {
  return (
    <View style={style.container}>
      <Image source={props.image} style={style.carImage} />
      <View>
        <View style={style.infos}>
          <Text style={style.title}>{props.immat}</Text>
          <Text>{props.model}</Text>

          <Text>{props.state}</Text>
        </View>
      </View>
    </View>
  );
};
CarListDetail.defaultProps = {image: image};
export default CarListDetail;
