import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Vibration,
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
              <TouchableOpacity
                key={i}
                onPress={evt => {
                  //Vibration.vibrate(200);
                  ToastAndroid.show(
                    `${auto.immat} est selectionné en courrant`,
                    ToastAndroid.LONG,
                  );
                  props.aCarIsTap(auto);
                  props.navigation.navigate('Editor');
                }}>
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
  aCarIsTap: PropTypes.func,
};
const styles = StyleSheet.create({});
