import React, { useState } from 'react';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { Button, HStack, Icon, Input, StatusBar, Text, VStack, View, useToast } from 'native-base';

import {supabase} from "../../lib/supabase"

export default function index() {
  const toast = useToast();
  const { cost_total, userId, receiptId } = useLocalSearchParams();
  const [loading, setLoading] = useState(false)
  const [orderName, setOrderName] = useState("")
  const [orderCost, setOrderCost] = useState("")

  let date = new Date()

  async function addCost(){
    if( orderName==0 && orderCost==0 ){
      toast.show({
        description: "Preencha os campos para realizar o cadastro do seu pedido.",
        placement: "top",
        variant: "solid",
      })
    }else{
      setLoading(true)
      const {error} = await supabase
      .from("historic")
      .insert({
        created_at: date,
        user: userId,
        receipt_id: receiptId,
        product_name: orderName,
        cost_parcial: orderCost,
      })

      if(error){
        setLoading(false)
        toast.show({
          description: "Problemas no cadastro do seu pedido. Tente novamente.",
          placement: "top",
          variant: "solid",
        })
      }

      router.back()
      toast.show({
        description: "Pedido adicionado com sucesso!",
        placement: "top",
        variant: "solid",
      })
      setLoading(false)
    }
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack height={"full"} mt={3} px={3} pb={"30px"} space={3} justifyContent={'space-between'}>
        <View>
            <View bgColor={"black"} rounded={'md'} p={2}>
                <VStack space={1} alignItems={'center'}>
                    <Text fontSize={"12px"} fontWeight={'normal'} color={"white"}>Sua parte da conta compartilhada até agora</Text>
                    <Text fontSize={"40px"} fontWeight={'normal'} color={"white"}>R$ {cost_total}</Text>
                </VStack>
            </View>
            <View bgColor={"white"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
                <VStack space={2}>
                    <Input value={orderName} onChangeText={setOrderName} variant="outline" placeholder="Nome do pedido" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} borderColor={"#eaeaea"} borderRadius={6} height={"54px"} />
                    <Input value={orderCost} onChangeText={setOrderCost} variant="outline" placeholder="Valor do pedido" placeholderTextColor={"#575960"} keyboardType='number-pad' bgColor={"white"} fontSize={'md'} borderColor={"#eaeaea"} borderRadius={6} height={"54px"} />
                </VStack>
            </View>
        </View>
        <VStack space={2} mb={4}>
          <Button onPress={() => {addCost()}} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
            <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Adicionar pedido</Text>
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