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
import CarList from './pages/CarList/CarList';
import {store} from './store/store';
const App = props => {
  console.log(store);
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
        // console.log(e);
        return e.json();
      })
      .then(carsRest => setParc([...parc, ...carsRest]));
  };
  useEffect(() => {
    //setParc([...cars]);
    getDatas();
    //setInterval(() => getDatas(), 10000);
  }, []);
  return (
    <SafeAreaView>
      <CarList cars={parc} />
    </SafeAreaView>
  );
};
export default App;
