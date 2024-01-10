import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './CarForScrollList.style';
import PropTypes from 'prop-types';
const CarForScrollList = props => {
  return (
    <View style={style.CarForScrollList}>
      <View>
        <Image source={props.image} style={style.image} />
      </View>
      <View>
        <Text style={style.immat}>{props.immat}</Text>
        <Text>{`${props.marque} ${props.model}`}</Text>
        <Text>{props.present ? 'INDISPONIBLE' : 'DISPONIBLE'}</Text>
      </View>
    </View>
  );
};
CarForScrollList.propTypes = {
  immat: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  marque: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  present: PropTypes.bool.isRequired,
  kms: PropTypes.number.isRequired,
};
CarForScrollList.defaultProps = {
  image: require('../../../../../assets/defaultCar.png'),
  present: false,
};
export default CarForScrollList;
