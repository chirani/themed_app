import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React from 'react';
import { fontSizes } from './Colors';
interface CustomTextProps extends RNTextProps {
  size?: 'h1' | 'h2' | 'h3' | 'normal' | 'small';
}
const Text: React.FC<CustomTextProps> = (props) => {
  let fontSize;
  let fontWeight: TextStyle['fontWeight'] = 'normal'; // Default font weight

  switch (props.size) {
    case 'small':
      fontSize = fontSizes.small;
      fontWeight = 'normal';
    case 'h1':
      fontSize = fontSizes.h1;
      fontWeight = 'bold';
      break;
    case 'h2':
      fontSize = fontSizes.h2;
      fontWeight = 'bold';
      break;
    case 'h3':
      fontSize = fontSizes.h3;
      fontWeight = 'bold';
      break;
    default:
      fontSize = fontSizes.regular;
      fontWeight = 'normal';
  }

  return (
    <RNText {...props} style={[{ fontSize, fontWeight }, props.style]}>
      {props.children}
    </RNText>
  );
};

export default Text;
