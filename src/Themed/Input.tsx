import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  useColorScheme,
} from 'react-native';
import { Colors } from '@/constants/Colors';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.text + '77'}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[
        styles.input,
        {
          backgroundColor: theme.uiBackground,
          borderColor: isFocused ? '#e50914' : theme.iconColor,
          color: theme.text,
        },
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginVertical: 8,
  },
});

export default Input;
