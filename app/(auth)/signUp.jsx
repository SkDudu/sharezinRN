import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';

import {supabase} from "../../lib/supabase"

import { Button, Image, NativeBaseProvider, Pressable, Text, VStack, View, ZStack, Icon, Input } from "native-base";
import { AtSign, RectangleEllipsis, User } from 'lucide-react-native';
import { Alert } from 'react-native';

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function signUpWithEmail(){
    setLoading(true)
    const {error} = await supabase.auth.signUp({
      email: email,
      password: password
    })

    if(error){
      Alert.alert(error.message)
    }else{
      router.replace("/signIn")
    }
    setLoading(false)
  }

  return (
    <NativeBaseProvider>
      <StatusBar style="dark" />
      <VStack height={"full"} px={4} space={1} pt={4} justifyContent={'space-between'}>
        <VStack space={2}>
          <VStack pb={2}>
            <Text fontSize={24} fontWeight={'semibold'}>Vamos começar!</Text> 
            <Text fontSize={16} fontWeight={'normal'} color={"#8c8c8c"}>Nos informe seus dados pessoais!</Text>
          </VStack>
          <Input value={name} onChangeText={setName} variant="outline" placeholder="Nome completo" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<User size={18} color={"#575960"}/>} px={4}/>}/>
          <Input value={email} onChangeText={setEmail} variant="outline" placeholder="E-mail" placeholderTextColor={"#575960"} keyboardType='email-address' bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<AtSign size={18} color={"#575960"}/>} px={4}/>}/>
          <Input value={password} onChangeText={setPassword} variant="outline" placeholder="Senha" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<RectangleEllipsis size={18} color={"#575960"}/>} px={4}/>}/>
          <Input value={confirmPassword} onChangeText={setConfirmPassword} variant="outline" placeholder="Confirme sua senha" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<RectangleEllipsis size={18} color={"#575960"}/>} px={4}/>}/>
        </VStack>
        <VStack space={2} mb={4}>
          <Pressable onPress={() => {signUpWithEmail()}} disabled={loading} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
            <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>{loading ? "Cadastrando..." : "Cadastrar"}</Text>
          </Pressable>
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