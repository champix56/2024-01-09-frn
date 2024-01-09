import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from './components/ui/Button/Button';

const App = props => {
  return (
    <SafeAreaView>
      <View>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </View>
    </SafeAreaView>
  );
};
export default App;
