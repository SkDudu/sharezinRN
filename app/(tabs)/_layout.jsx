import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { Home, ReceiptText, SquareUserRound } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'black'}}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Início',
            tabBarIcon: ({ color }) => <Home size={20} color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="receiptClosed"
          options={{
            title: 'Contas fechadas',
            tabBarIcon: ({ color }) => <ReceiptText size={20} color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <SquareUserRound size={20} color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
}
