import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import { Box, Button, Image, NativeBaseProvider, Pressable, Text, VStack, View, ZStack, Icon, Input } from "native-base";
import { AtSign, RectangleEllipsis, User } from 'lucide-react-native';

export default function forgotPass() {
  return (
    <NativeBaseProvider>
      <StatusBar style="dark" />
      <VStack height={"full"} px={4} space={1} pt={4} justifyContent={'space-between'}>
        <VStack space={2}>
          <VStack pb={2}>
            <Text fontSize={24} fontWeight={'semibold'}>Para redefinir a senha...</Text> 
            <Text fontSize={16} fontWeight={'normal'} color={"#8c8c8c"}>Para receber o link para redefinir a senha, insira seu email cadastrado abaixo.</Text>
          </VStack>
          <Input variant="outline" placeholder="E-mail" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<AtSign size={18} color={"#575960"}/>} px={4}/>}/>
        </VStack>
        <VStack space={2} mb={4}>
          <Link href="/" asChild>
            <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Enviar</Text>
            </Button>
          </Link>

          <Link href="/" asChild>
            <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"white"} rounded={"md"}>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"black"}>Voltar</Text>
            </Button>
          </Link>
        </VStack>
      </VStack>
    </NativeBaseProvider>
  )
}