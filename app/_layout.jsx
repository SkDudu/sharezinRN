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
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
      </Stack>
    </NativeBaseProvider>
  )
}
