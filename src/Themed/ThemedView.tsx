import { View, useColorScheme, StyleProp, ViewStyle, ViewProps } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Extend ViewProps to include `safe`
interface ThemedViewProps extends ViewProps {
  safe?: boolean;
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  
  

  const combinedStyle: StyleProp<ViewStyle> = [
    { backgroundColor: theme.background },
    ...(Array.isArray(style) ? style : [style]),
  ];

  if (!safe) {
    return <View style={combinedStyle} {...props} />;
  }

  const insets = useSafeAreaInsets();

  const safeStyle: StyleProp<ViewStyle> = [
    combinedStyle,
    { paddingTop: insets.top, paddingBottom: insets.bottom },
  ];

  return <View style={safeStyle} {...props} />;
};

export default ThemedView;
