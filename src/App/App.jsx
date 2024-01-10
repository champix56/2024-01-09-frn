import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CarForScrollList from './components/ui/CarForScrollList/CarForScrollList';

const App = props => {
  const [parc, setParc] = useState([]);
  const getDatas = () => {
    let lastid = -1;
    if (parc.length > 0) {
      lastid = parc[parc.length - 1].id;
    }
    console.log('fetch datasr');
    fetch(
      `https://formationreactnative-6e313d-expose.insign.agency/cars?id_gte=${
        lastid + 1
      }`,
    )
      .then(e => {
        console.log(e);
        return e.json();
      })
      .then(carsRest => setParc([...parc, ...carsRest]));
  };
  useEffect(() => {
    //setParc([...cars]);
    getDatas();
    setInterval(() => getDatas(), 10000);
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
