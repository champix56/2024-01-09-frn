import {View, Text} from 'react-native';
import React from 'react';
import UnconnectedCarList from './CarList';
import {addCar} from '../../store/vehicules';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setDatas} from '../../store/vehicule';

const CarList = props => {
  const d = useDispatch();
  const cars = useSelector(storeState => storeState.list);
  return (
    <UnconnectedCarList
      {...props}
      cars={cars}
      aCarIsTap={acar => d(setDatas(acar))}
    />
  );
};
export default CarList;
/*
function mapStateToProps(storeState, ownProps) {
  return {...ownProps, cars: storeState.list};
}
function mapDispatchToProps(dispatch) {
  return {
    // addInList: acar => {
    //   dispatch(addCar(acar));
    // },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedCarList);
*/
