import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {cars} from '../../db/db.json';
import CarForScrollList from './components/ui/CarForScrollList/CarForScrollList';

const App = props => {
  const [parc, setParc] = useState([]);
  useEffect(() => {
    setParc([...cars]);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          {parc.map((auto, i) => {
            return (
              <TouchableOpacity key={i}>
                <CarForScrollList {...auto} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default App;
