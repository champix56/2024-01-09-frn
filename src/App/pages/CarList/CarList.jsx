import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CarForScrollList from '../../components/ui/CarForScrollList/CarForScrollList';
const CarList = props => {
  const [textFilter, setTextFilter] = useState('');
  return (
    <View>
      <View>
        <TextInput
          placeholder="Filtrer list"
          value={textFilter}
          onChangeText={str => setTextFilter(str)}
        />
      </View>
      <View>
        <ScrollView>
          {props.cars
            .filter(
              e =>
                e.immat.toLowerCase().includes(textFilter.toLowerCase()) ||
                e.model.toLowerCase().includes(textFilter.toLowerCase()) ||
                e.marque.toLowerCase().includes(textFilter.toLowerCase()),
            )
            .map((auto, i) => (
              <TouchableOpacity key={i}>
                <CarForScrollList {...auto} />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CarList;
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};
const styles = StyleSheet.create({});
