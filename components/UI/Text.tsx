import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import React from 'react';

interface CustomTextProps extends RNTextProps {
  size?: 'h1' | 'h2' | 'h3' | 'normal' | 'small';
}
const Text: React.FC = (props: CustomTextProps) => {
  let fontSize: number = 16; // Default font size
  let fontWeight: TextStyle['fontWeight'] = 'normal'; // Default font weight

  switch (props.size) {
    case 'small':
      fontSize = 12;
      fontWeight = 'normal';
    case 'h1':
      fontSize = 32;
      fontWeight = 'bold';
      break;
    case 'h2':
      fontSize = 24;
      fontWeight = 'bold';
      break;
    case 'h3':
      fontSize = 20;
      fontWeight = 'bold';
      break;
    default:
      fontSize = 16;
      fontWeight = 'normal';
  }

  return (
    <RNText style={[props.style, { fontSize, fontWeight }]} {...props}>
      {props.children}
    </RNText>
  );
};

export default Text;
