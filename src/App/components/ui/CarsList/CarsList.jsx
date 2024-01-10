import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import CarListDetail from '../CarListDetail/CarListDetail';
import PropTypes from 'prop-types';
import ScrollableList from '../../layout/ScrollableList/ScrollableList';
const CarsList = props => {
  return (
    <ScrollableList>
      {props.cars.map((c, i) => (
        <TouchableOpacity>
          <View>
            <CarListDetail {...c} onTap={arg => {}} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollableList>
  );
};
CarsList.propsTypes = {
  cars: PropTypes.array.isRequired,
};
export default CarsList;
