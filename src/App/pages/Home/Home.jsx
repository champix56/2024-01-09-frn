import {Button, Image, Text, View} from 'react-native';
import React from 'react';
const Home = props => {
  console.log(props);
  //aconst nav = useNavigation();
  console.log(props);
  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../../assets/defaultCar.png')}
        style={{marginTop: 50, width: 128, height: 128}}
      />
      <Text
        style={{
          fontSize: 48,
          marginBottom: 20,
          textDecorationColor: 'tomato',
          fontStyle: 'italic',
        }}>
        Car Rent
      </Text>

      <View
        style={{
          flexGrow: 1,
          justifyContent: 'space-around',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Button
          title="New car"
          onPress={evt => {
            props.navigation.navigate('Editor');
          }}
        />
        <Button
          title="view cars"
          onPress={evt => {
            props.navigation.navigate('List');
          }}
        />
        <Button
          title="Clients"
          onPress={evt => {
            props.navigation.navigate('Clients');
          }}
        />
      </View>
    </View>
  );
};

export default Home;
