import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './store/store';
import {Provider} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home/Home';
import CarList from './pages/CarList/CarList.stored';
import CarEditor from './pages/CarEditor/CarEDitor.stored';
const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <Provider store={store}>
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {p => <Home {...p} />}
          </Stack.Screen>
          <Stack.Screen
            name="Editor"
            options={{headerShown: false}}
            component={CarEditor}
          />
          <Stack.Screen
            name="List"
            options={{headerShown: false}}
            component={CarList}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </Provider>
  );
};
export default App;
