import {ScrollView} from 'react-native';
import React from 'react';

const ScrollableList = props => {
  return <ScrollView>{props.children}</ScrollView>;
};

export default ScrollableList;
