import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="signIn"
        options={{
          title: 'Sign In',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    </Stack>
  )
}
