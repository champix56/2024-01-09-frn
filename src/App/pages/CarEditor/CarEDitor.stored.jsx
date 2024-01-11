import {View, Text} from 'react-native';
import React from 'react';
import Unconnected from './CarEditor';
import {useDispatch, useSelector} from 'react-redux';
import {editCarData} from '../../store/vehicules';
const CarEditor = props => {
  const d = useDispatch();
  const current = useSelector(s => s.current);
  return (
    <Unconnected
      {...props}
      car={current}
      onChange={car => d(editCarData(car))}
    />
  );
};

export default CarEditor;
