import { View, Text, ViewProps } from 'react-native';
import React from 'react';

const Container = (props: ViewProps) => {
  return <View {...props}>{props.children}</View>;
};

export default Container;
