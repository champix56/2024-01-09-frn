import {View, Text, Button} from 'react-native';
import React from 'react';

const Home = props => {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => props.navigate('list', {cars: 'Jane'})}
      />
    </View>
  );
};

export default Home;
