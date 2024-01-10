import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CarListPage from './pages/CarsListPage/CarsListPage';
import {cars} from './datasets/cars.json';
import VehiculeEditor from './components/functionnal/forms/VehiculeEditor/VehiculeEditor';
const App = props => {
  return (
    <SafeAreaView>
      <View>
        {/* <CarListPage cars={cars} /> */}
        <VehiculeEditor />
      </View>
    </SafeAreaView>
  );
};
export default App;
