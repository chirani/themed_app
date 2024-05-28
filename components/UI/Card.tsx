import { View, ViewProps } from 'react-native';
import React from 'react';
import { spacing, colors } from './Colors';

interface CardProps extends ViewProps {}

const Card = (props: CardProps) => {
  const { children } = props;
  return (
    <View
      {...props}
      style={[
        {
          padding: spacing.lg,
          borderWidth: 2,
          borderColor: colors.text,
          borderRadius: spacing.lg,
        },
        props.style,
      ]}>
      {children}
    </View>
  );
};

export default Card;
