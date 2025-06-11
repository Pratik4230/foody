
import CustomHeader from '@/components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export {

  ErrorBoundary,
} from 'expo-router';


export default function RootLayout() {
 


  return (
    <>
    <StatusBar style= "auto"   />

   <SafeAreaProvider  >
     <GestureHandlerRootView>
      <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ header: () => <CustomHeader/> }} />
     
      </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
      </SafeAreaProvider>
      </>

  );
}
