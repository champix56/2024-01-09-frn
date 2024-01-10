import {View} from 'react-native';
import React from 'react';
import CarsListFilter from '../../components/ui/CarsListFilter/CarsListFilter';
import CarsList from '../../components/ui/CarsList/CarsList';
// import CarsList from '../../components/ui/CarsList/CarsList';

const CarListPage = props => {
  return (
    <View>
      <CarsListFilter
        cars={props.cars}
        onFilterChange={value => {
          console.log(value);
        }}
      />
      <CarsList cars={props.cars} />
    </View>
  );
};

export default CarListPage;
