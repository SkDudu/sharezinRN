import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          title: "Criar novo recibo compartilhado",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
