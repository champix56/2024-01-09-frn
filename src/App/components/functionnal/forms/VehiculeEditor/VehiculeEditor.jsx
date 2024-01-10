import {View, Text, TextInput, Image, ScrollView, Button} from 'react-native';
import React from 'react';
import style from './VehiculeEditor.style';
const VehiculeEditor = () => {
  return (
    <View style={style.component}>
      <View style={style.header}>
        <View>
          <Image
            source={require('../../../../assets/images/car3D.png')}
            style={style.headerImg}
          />
        </View>
        <View>
          <Text style={style.headerText}>Vehicule infos</Text>
        </View>
      </View>
      <View style={style.centralContainer}>
        <ScrollView>
          <View>
            <TextInput
              style={{...style.inputBig, ...style.input}}
              placeholder="immatriculation"
            />
            <TextInput
              style={{...style.inputBig, ...style.input}}
              placeholder="Model"
            />
            <TextInput
              style={{...style.inputBig, ...style.input}}
              placeholder="status"
            />
            <TextInput
              style={{...style.inputBig, ...style.input}}
              placeholder="kms"
            />
            <TextInput
              style={{...style.inputBig, ...style.input}}
              placeholder="couleur"
            />
          </View>
        </ScrollView>
      </View>
      <View style={style.buttons}>
        <Button
          style={{...style.button, bacgroundColor: 'tomato'}}
          title="Cancel"
        />
        <Button style={style.button} title="OK" />
      </View>
    </View>
  );
};

export default VehiculeEditor;
