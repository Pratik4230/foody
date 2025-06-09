import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  useColorScheme,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  showClear?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  showClear = true,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? 'light';

  const theme = Colors[colorScheme];



  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.uiBackground,
          borderColor: theme.iconColor + '33',
        },
      ]}
    >
      <Ionicons name="search" size={18} color={theme.iconColor} style={styles.icon} />
     <TextInput
  value={value}
  onChangeText={onChangeText}
  placeholder={placeholder}
  placeholderTextColor={colorScheme === 'dark' ? '#ffffffaa' : '#444'}
  style={[
    styles.input,
 
  ]}
  {...props}
/>

      {showClear && value.length > 0 && (
        <Pressable
          onPress={() => onChangeText('')}
          android_ripple={{ color: theme.iconColor + '22', borderless: true }}
          style={({ pressed }) => [
            styles.clearIcon,
            { opacity: pressed ? 0.6 : 1 },
          ]}
        >
          <Ionicons name="close-circle" size={18} color={theme.iconColor} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 44,
  },
  icon: {
    marginRight: 6,
  },
  clearIcon: {
    marginLeft: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
  },
});

export default SearchInput;
