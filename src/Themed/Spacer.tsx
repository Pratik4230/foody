import { View } from 'react-native';
import React from 'react';
import type { ViewStyle, StyleProp } from 'react-native';

type Dimension = number | `${number}%`;

interface SpacerProps {
  width?: Dimension;
  height?: Dimension;
}

const Spacer: React.FC<SpacerProps> = ({ width = '100%', height = 40 }) => {
  const style: StyleProp<ViewStyle> = {
    width,
    height,
  };

  return <View style={style} />;
};

export default Spacer;
