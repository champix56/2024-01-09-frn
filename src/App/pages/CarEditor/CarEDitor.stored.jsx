import {View, Text} from 'react-native';
import React from 'react';
import Unconnected from './CarEditor';
import {useDispatch, useSelector} from 'react-redux';
const CarEditor = props => {
  const d = useDispatch();
  const current = useSelector(s => s.current);
  return <Unconnected {...props} car={current} />;
};

export default CarEditor;
