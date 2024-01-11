import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  component: {alignItems: 'stretch', alignContent: 'strech'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexGrow: 0,
  },
  headerText: {
    fontSize: 32,
  },
  headerImg: {height: 48, width: 48},
  input: {
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  inputBig: {fontSize: 24},
  centralContainer: {flexGrow: 1},
  buttons: {flexGrow: 0, flexDirection: 'row', justifyContent: 'space-around'},
  button: {width: '45%'},
});
