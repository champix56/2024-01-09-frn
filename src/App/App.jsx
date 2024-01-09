import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from './components/ui/Button/Button';

const App = props => {
  return (
    <SafeAreaView>
      <View>
        <Button text="Benjamin" bgColor="tomato" color="white" />
        <Button text="dfghjk" bgColor="skyblue" />
      </View>
    </SafeAreaView>
  );
};
export default App;
