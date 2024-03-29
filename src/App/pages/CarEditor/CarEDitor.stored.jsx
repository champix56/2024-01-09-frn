import {View, Text} from 'react-native';
import React from 'react';
import Unconnected from './CarEditor';
import {useDispatch, useSelector} from 'react-redux';
import {} from '../../store/vehicules';
import {saveCar, setDatas} from '../../store/vehicule';
const CarEditor = props => {
  const d = useDispatch();
  const current = useSelector(s => s.current);
  return (
    <Unconnected
      {...props}
      car={current}
      onChange={car => d(setDatas(car))}
      onSave={car => {
        d(saveCar(car));
      }}
    />
  );
};

export default CarEditor;
