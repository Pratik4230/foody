// hooks/useAppTheme.ts
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export const useAppTheme = () => {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null
  const isDark = colorScheme === 'dark';
  const theme = isDark ? Colors.dark : Colors.light;

  return {
    isDark,
    mode: colorScheme ?? 'light',
    colors: theme,
  };
};
