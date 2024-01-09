import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight>
      <View>
        <Text>{props.text}</Text>
      </View>
    </TouchableHighlight>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue']),
  color: PropTypes.string.isRequired,
};
export default Button;
