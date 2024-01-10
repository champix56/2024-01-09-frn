import {View, Text, TextInput} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const CarsListFilter = props => {
  return (
    <View>
      <TextInput
        placeholder="filtrer les voitures"
        onChangeText={evt => {
          props.onFilterChange(evt);
        }}
      />
    </View>
  );
};
CarsListFilter.propTypes = {
  cars: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
export default CarsListFilter;
