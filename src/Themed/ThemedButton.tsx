import React from 'react';
import {
  Text,
  Pressable,
  ActivityIndicator,
  useColorScheme,
  ViewStyle,
  TextStyle,
  StyleProp,
  View,
} from 'react-native';
import { Colors } from '@/constants/Colors';

type ButtonVariant = 'blue' | 'black' | 'white' | 'red' | 'orange' | 'green';
type ButtonSize = 'sm' | 'md' | 'lg';
type VariantType = 'solid' | 'ghost' | 'outline';

interface ThemedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variantType?: VariantType;
}

const sizeTokens = {
  sm: { paddingVertical: 6, paddingHorizontal: 12, fontSize: 14 },
  md: { paddingVertical: 10, paddingHorizontal: 16, fontSize: 16 },
  lg: { paddingVertical: 14, paddingHorizontal: 20, fontSize: 18 },
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  variant = 'blue',
  size = 'md',
  variantType = 'solid',
  loading = false,
  disabled = false,
  onPress,
  style,
  textStyle,
  children,
  leftIcon,
  rightIcon,


}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const variantColor = theme.button[variant];
  const sizeStyle = sizeTokens[size];
  const isDisabled = disabled || loading;

  // Determine background & border styles based on variantType
  const getButtonStyle = (pressed: boolean): ViewStyle => {
    let backgroundColor = variantColor.background;
    let borderColor = 'transparent';
    let borderWidth = 0;

    if (variantType === 'ghost') {
      backgroundColor = 'transparent';
    }

    if (variantType === 'outline') {
      backgroundColor = 'transparent';
      borderColor = variantColor.background;
      borderWidth = 1.5;
    }

    return {
      backgroundColor,
      borderColor,
      borderWidth,
      paddingVertical: sizeStyle.paddingVertical,
      paddingHorizontal: sizeStyle.paddingHorizontal,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isDisabled ? 0.5 : pressed ? 0.85 : 1,
     
     
    };
  };

  return (
    <Pressable onPress={onPress} disabled={isDisabled} style={({ pressed }) => [getButtonStyle(pressed), style]}>
      {loading ? (
        <ActivityIndicator color={variantType === 'solid' ? variantColor.text : variantColor.background} />
      ) : (
        <>
          {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
          <Text
            style={[
              {
                color:
                  variantType === 'solid'
                    ? variantColor.text
                    : variantColor.background,
                fontSize: sizeStyle.fontSize,
                fontWeight: '600',
              },
              textStyle,
            ]}
          >
            {children}
          </Text>
          {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
        </>
      )}
    </Pressable>
  );
};

export default ThemedButton;
