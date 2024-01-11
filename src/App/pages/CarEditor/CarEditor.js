import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  Image,
  Switch,
} from 'react-native';
import React from 'react';
import style from './CarEditor.style';
import PropTypes from 'prop-types';
const CarEditor = props => {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <View style={style.header}>
        <Image
          style={style.headerImg}
          source={require('../../../../assets/defaultCar.png')}
        />
        <Text style={style.headerText}>Edition vehicule</Text>
      </View>
      <View
        style={{
          flexGrow: 1,
        }}>
        <ScrollView>
          <TextInput
            style={{...style.inputBig, ...style.input}}
            placeholder="immatriculation"
            value={props.car.immat}
            onChangeText={str => {
              props.onChange({...props.car, immat: str});
            }}
          />
          <TextInput
            style={{...style.inputBig, ...style.input}}
            placeholder="Marque"
            value={props.car.marque}
            onChangeText={str => {
              props.onChange({...props.car, marque: str});
            }}
          />
          <TextInput
            style={{...style.inputBig, ...style.input}}
            placeholder="Model"
            value={props.car.model}
            onChangeText={str => {
              props.onChange({...props.car, model: str});
            }}
          />
          <TextInput
            keyboardType="number-pad"
            keyboardAppearance="dark"
            style={{...style.inputBig, ...style.input}}
            placeholder="kms"
            value={props.car.kms.toString()}
            onChangeText={str => {
              props.onChange({...props.car, kms: Number(str)});
            }}
          />
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={style.inputBig}>dispo :</Text>
            <Switch
              style={{...style.input}}
              value={props.car.present}
              onValueChange={bol => {
                props.onChange({...props.car, present: bol});
              }}
            />
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
        }}>
        <Button title="Cancel" style={{width: '45%'}} />
        <Button title="OK" onPress={evt => props.onSave(props.car)} />
      </View>
    </View>
  );
};
CarEditor.propTypes = {
  car: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default CarEditor;
