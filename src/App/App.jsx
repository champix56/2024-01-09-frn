import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Button from './components/ui/Button/Button';
import style from './App.style';
const App = props => {
  return (
    <SafeAreaView>
      <View>
        <Button color="white">
          <View style={style.appButtonView}>
            <Image
              style={style.appButtonImage}
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/miscellaneous-80/60/check-256.png',
              }}
            />
            <Text style={{...style.appButtonText, ...style.bold}}>ertyui</Text>
          </View>
        </Button>
        <Button
          bgColor="skyblue"
          children={<Text style={style.appButtonText}>Bejamin</Text>}
        />
        <Button bgColor="skyblue">
          <Image
            style={style.appButtonImage}
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/miscellaneous-80/60/check-256.png',
            }}
          />
          <Text style={style.appButtonText}>Hello de lu</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default App;
