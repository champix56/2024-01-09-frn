import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';

interface IButtonProps {
  text?: string;
  bgColor?: 'tomato' | 'skyblue' | undefined;
  color?: string;
}
const Button: React.FC<IButtonProps> = props => {
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
  text: PropTypes.string,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue']),
  color: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgColor: 'skyblue',
  text: 'value',
};
export default Button;
