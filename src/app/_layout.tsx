
import CustomHeader from '@/components/CustomHeader';
import { Stack } from 'expo-router';

import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function RootLayout() {
 

  return (
   <SafeAreaProvider >
      <Stack>
        <Stack.Screen name="index" options={{ header: () => <CustomHeader/> }} />
     
      </Stack>
      </SafeAreaProvider>

  );
}
