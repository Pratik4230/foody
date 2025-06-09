import { Text, useColorScheme, TextProps } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

interface ThemedTextProps extends TextProps {
  title?: boolean;
}

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const textColor = title ? theme.title : theme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props} />
  );
};

export default ThemedText;
