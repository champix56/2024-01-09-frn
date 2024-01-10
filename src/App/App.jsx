import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {cars} from '../../db/db.json';
import CarForScrollList from './components/ui/CarForScrollList/CarForScrollList';

const App = props => {
  return (
    <SafeAreaView>
      <View>
        <CarForScrollList {...cars[0]} />
      </View>
    </SafeAreaView>
  );
};
export default App;
