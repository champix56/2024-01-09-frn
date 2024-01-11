import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import CarList from './pages/CarList/CarList.stored';
import {store} from './store/store';
import {Provider} from 'react-redux';
import CarEditor from './pages/CarEditor/CarEDitor.stored';
const App = props => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <CarList /> */}
        <CarEditor />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
