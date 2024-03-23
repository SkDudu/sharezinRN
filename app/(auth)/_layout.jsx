import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="signIn"
        options={{
          title: 'Sign In',
          headerShown: false,
        }}
      />

      <Stack.Screen 
        screenOptions={{headerShown: true}}
        name="signUp"
        options={{
          title: 'Cadastro',
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen 
        screenOptions={{headerShown: true}}
        name="forgotPass"
        options={{
          title: 'Esqueci a senha',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
