import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import { Box, Button, Image, NativeBaseProvider, Pressable, Text, VStack, View, ZStack } from "native-base";

import bg from "../../assets/bg.png"
import logo from "../../assets/logo.png"

export default function Home() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <ZStack width={"full"} height={"full"}>
        <Image 
          alt="pattern of icons"
          source={bg}
          width={"full"}
          height={"full"}
        />
        <VStack width={"full"} height={"full"} justifyContent={'space-between'}>
          <View paddingTop={"100px"}>
            <Image 
              alt="pattern of icons"
              source={logo}
              width={"50px"}
              height={"60px"}
              resizeMode='contain'
            />
            <Text fontSize={'32px'} fontWeight={'medium'} color={"white"} pt={"12px"}>Controle a conta da festa!</Text>
          </View>
          <View bgColor={'white'} width={"full"} height={"500px"} paddingX={"12px"} borderTopLeftRadius={"md"} borderTopRightRadius={"md"}>
            <Text fontSize={'24px'} fontWeight={'medium'} color={"#575960"} pt={"12px"}>Login</Text>
          </View>
        </VStack>
      </ZStack>
    </NativeBaseProvider>
  )
}