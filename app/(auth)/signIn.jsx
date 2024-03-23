import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import { Box, Button, Image, NativeBaseProvider, Pressable, Text, VStack, View, ZStack, Icon, Input } from "native-base";

import bg from "../../assets/bg.png"
import logo from "../../assets/logo.png"

import { AtSign, RectangleEllipsis } from 'lucide-react-native';

export default function singIn() {
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
          <View paddingTop={"100px"} px={4}>
            <Image 
              alt="pattern of icons"
              source={logo}
              width={"50px"}
              height={"60px"}
              resizeMode='contain'
            />
            <Text fontSize={'32px'} fontWeight={'medium'} color={"white"} pt={"12px"}>Controle a conta da festa!</Text>
          </View>
          <VStack bgColor={'#f5f7f9'} width={"full"} height={"500px"} paddingX={"12px"} py={8} borderTopLeftRadius={"md"} borderTopRightRadius={"md"} justifyContent={'space-between'}>
            <Text fontSize={'24px'} fontWeight={'medium'} color={"#575960"}>Login</Text>
            <VStack space={4}>
              <Input variant="outline" placeholder="E-mail" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<AtSign size={18} color={"#575960"}/>} px={4}/>}/>
              <Input variant="outline" placeholder="Senha" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<RectangleEllipsis size={18} color={"#575960"}/>} px={4}/>}/>
            </VStack>
            <Link href="/home" asChild>
              <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
                  <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Entrar</Text>
              </Button>
            </Link>

            <Link href="/forgotPass" asChild>
              <Button bgColor={"#f6f7f9"} rounded={"md"} width={"120px"} padding={0} margin={0}>
                <Text alignSelf={'flex-start'} fontSize={'md'} fontWeight={'normal'} color={"#505050"} py={4}>Esqueci a senha</Text>
              </Button>
            </Link>

            <Link href="/signUp" asChild>
              <Text alignSelf={"center"} fontSize={'md'} fontWeight={'normal'} color={"#505050"}>Não tem conta? <Text underline>Cadastre-se aqui</Text></Text>
            </Link>
          </VStack>
        </VStack>
      </ZStack>
    </NativeBaseProvider>
  )
}