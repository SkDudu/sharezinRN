import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Link, router } from 'expo-router';

import {supabase} from "../../../lib/supabase"

import { Plus, PlusCircle } from 'lucide-react-native';
import { Button, Fab, FlatList, HStack, Icon, StatusBar, Text, Toast, VStack, useToast } from 'native-base';

import CardReceipt from '../../components/cardReceipt'
import CardReceiptEmpty from '../../components/cardReceiptEmpty'

export default function Home() {
  const [receiptDataOwner, setReceiptDataOwner] = useState([])
  const [userId, setUserId] = useState()

  async function getUser(){
    const { data: { user } } = await supabase.auth.getUser()
    if(user !== undefined){
      setUserId(user?.id)
    }
  }

  useEffect(() => {
    const user = userId ? userId : undefined
    if(user !== undefined && user !== null){
      async function fetchReceipts(){
        const { data, error } = await supabase
        .from('receipt')
        .select(`
          id,
          created_at,
          restaurant_name,
          name_receipt
        `)
        .eq("user", user)
  
        if(data !== undefined && data !== null){
          setReceiptDataOwner(data)
        }else{
          Toast.show({
            description: "Problemas em recuperar dados, feche o aplicativo e abra novamente.",
            placement: "bottom",
            variant: "solid",
          })
        }
      }
      
      fetchReceipts()
    }

    getUser()
  }, [userId])

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={10} px={3} space={4}>
        <Text fontSize={22} fontWeight={"bold"}>Encontre a conta que seu amigo fez para a saideira!</Text>
        <Button onPress={() => {router.push({pathname: "/searchReceipt", params: {userId}})}} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
          <HStack space={2} alignItems={'center'}>
            <PlusCircle size={20} color={"white"}/>
            <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Procure a conta pelo código</Text>
          </HStack>
        </Button>
        
        <VStack space={2}>
          <Text fontSize={20} fontWeight={"normal"}>Contas abertas</Text>
          {receiptDataOwner==null && receiptDataOwner==undefined ? <CardReceiptEmpty /> : <FlatList data={receiptDataOwner} keyExtractor={item => item.id} renderItem={({item}) => <CardReceipt {...item} /> } />}
        </VStack>
      </VStack>
      <Fab renderInPortal={false} onPress={() => {router.push({pathname: "/newReceipt", params: {userId}})}} bgColor={"black"} shadow={2} icon={<Plus color={"white"} size={30}/>} />
    </>
  )
}