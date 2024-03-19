import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Box, Image, NativeBaseProvider, Pressable, Text, VStack, View, ZStack } from "native-base";

import bg from "../assets/bg.png"
import logo from "../assets/logo.png"

export default function Page() {
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
        <VStack width={"full"} height={"full"} paddingX={"10px"} paddingY={"30px"} justifyContent={ 'space-between'}>
          <VStack space={"70px"}>
            <VStack alignItems={'center'} pt={"150px"}>
              <Image 
                alt="pattern of icons"
                source={logo}
                width={"50px"}
                height={"60px"}
                resizeMode='contain'
              />
              <Text alignSelf={"center"} fontSize={'32px'} fontWeight={'semibold'} color={"white"}>Sharezin</Text>
            </VStack>
            <VStack>
              <Text alignSelf={"center"} fontSize={'lg'} fontWeight={'semibold'} color={"white"}>Seja inteligente!</Text>
              <Text alignSelf={"center"} fontSize={'md'} fontWeight={'normal'} color={"#8c8c8c"}>Uma maneira de controlar a conta da saideira.</Text>
            </VStack>
          </VStack>
          <Pressable width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"white"} rounded={"md"}>
            <Link replace href="/signIn">
              <Text alignSelf={"center"} fontSize={'md'} fontWeight={'normal'}>Vamos começar</Text>
            </Link>
          </Pressable>
        </VStack>
      </ZStack>
    </NativeBaseProvider>
  )
}