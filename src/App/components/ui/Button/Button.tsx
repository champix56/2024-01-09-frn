import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './Button.style';
interface IButtonProps {
  children: React.ReactElement | Array<React.ReactElement>;
  bgColor?: 'tomato' | 'skyblue' | undefined;
  color?: string;
}
const Button: React.FC<IButtonProps> = props => {
  console.log(props);
  const assembleStyle = () => {
    const styleret = {...style.Button};
    if (props.bgColor) {
      styleret.backgroundColor = props.bgColor;
    }
    return styleret;
  };
  return (
    <TouchableHighlight>
      <View style={assembleStyle()}>{props.children}</View>
    </TouchableHighlight>
  );
};
Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue']),
  color: PropTypes.string.isRequired,
};
Button.defaultProps = {
  children: <Text>Button</Text>,
};
export default Button;
