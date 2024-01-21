import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {height: 48, width: 48},
  id: {},
  rs: {
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
  },
  bold: {
    fontWeight: '900',
  },
  container: {
    flexDirection: 'row',
  },
  containedRight: {flexGrow: 1, justifyContent: 'center'},
  containedLeft: {flex: 1, alignItems: 'center'},
});
