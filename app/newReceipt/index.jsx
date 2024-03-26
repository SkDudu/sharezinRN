import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Link, router, useLocalSearchParams } from 'expo-router';

import { Music4, Percent, QrCode, User, Utensils } from 'lucide-react-native';
import { StatusBar, VStack, Text, Input, Icon, Button, View, useToast } from 'native-base';

import {supabase} from "../../lib/supabase"

export default function newReceipt() {
  const toast = useToast();
  const { userId } = useLocalSearchParams();
  const [nameReceipt, setNameReceipt] = useState("")
  const [nameRestaurant, setNameRestaurant] = useState("")
  const [taxWaiter, setTaxWaiter] = useState("")
  const [taxCover, setTaxCover] = useState("")
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)

  let date = new Date()

  async function newReceipt(){
    if(nameReceipt==0 && nameRestaurant==0 && taxWaiter==0 && taxCover==0 && code==0){
      toast.show({
        description: "Preencha os campos para realizar o cadastro.",
        placement: "bottom",
        variant: "solid",
      })
    }else{
      setLoading(true)
      const {error} = await supabase
        .from("receipt")
        .insert({
          created_at: date,
          restaurant_name: nameRestaurant,
          name_receipt: nameReceipt,
          user: userId,
          status_receipt: true,
          tax_garcom: taxWaiter,
          tax_cover: taxCover,
          codeInvite: code,
          cost_total: 0,
        })

      if(error){
        toast.show({
          description: "Problemas no cadastro de recibos. Tente novamente.",
          placement: "bottom",
          variant: "solid",
        })
        setLoading(false)
      }else{
        router.replace({pathname: "/newReceipt/copyCodeShare", params: {code}})
        toast.show({
          description: "Recibo criado com sucesso!",
          placement: "top",
          variant: "solid",
        })
      }
      setLoading(false)
    }
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack height={'full'} pt={2} px={3} space={3} justifyContent={'space-between'}>
        <VStack space={3}>
          <Text fontSize={16} fontWeight={'normal'} color={"#8c8c8c"}>Insira as informações para criar uma conta compartilhada!</Text>
          <Input 
            variant="outline" 
            placeholder="Nome do recibo" 
            placeholderTextColor={"#575960"} 
            value={nameReceipt} 
            onChangeText={setNameReceipt}
            keyboardType='default'
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<User size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Nome do restaurante" 
            value={nameRestaurant} 
            onChangeText={setNameRestaurant}
            keyboardType='default'
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<Utensils size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Taxa garçom" 
            value={taxWaiter} 
            onChangeText={setTaxWaiter}
            keyboardType='number-pad'
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<Percent size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Taxa cover" 
            value={taxCover} 
            onChangeText={setTaxCover}
            keyboardType='number-pad'
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<Music4 size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Código de compartilhamento" 
            value={code} 
            onChangeText={setCode}
            autoCapitalize='none'
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<QrCode size={18} color={"#575960"}/>} px={4}/>}
          />
        </VStack>
        <VStack space={2} mb={4}>
          <Button onPress={() => {newReceipt()}} disabled={loading} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
            <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>{loading ? "Criando recibo..." : "Criar recibo"}</Text>
          </Button>
          <Link href="/home" asChild>
            <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"white"} rounded={"md"}>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"black"}>Cancelar</Text>
            </Button>
          </Link>
        </VStack>
      </VStack>
    </>
  )
}