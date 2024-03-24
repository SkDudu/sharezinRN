import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

export default function Layout() {
  return (
    <NativeBaseProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="index"
          options={{
            title: 'Sign In',
          }}
        />
      </Stack>
    </NativeBaseProvider>
  )
}
