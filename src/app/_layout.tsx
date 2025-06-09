
import CustomHeader from '@/components/CustomHeader';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


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
    
      <Stack>
        <Stack.Screen name="index" options={{ header: () => <CustomHeader/> }} />
     
      </Stack>
      </SafeAreaProvider>
      </>

  );
}
