import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          title: "Detalhes",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen 
        name="addCost"
        options={{
          title: "Adicionar o valor do pedido",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
