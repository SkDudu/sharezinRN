import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';

import {supabase} from "../../../lib/supabase"

import { Plus, PlusCircle } from 'lucide-react-native';
import { Button, Fab, FlatList, HStack, Icon, StatusBar, Text, VStack } from 'native-base';

import CardReceipt from '../../components/cardReceipt'
import { Alert } from 'react-native';

export default function Home() {
  const [receiptData, setReceiptData] = useState()
  const [userId, setUserId] = useState()

  async function getUser(){
    const { data: { user } } = await supabase.auth.getUser()
    //console.log('user data', user.id)
    if(user !== undefined){
      setUserId(user?.id)
    }
  }

  useEffect(() => {
    const user = userId ? userId : undefined
    if(user !== undefined){
      async function fetchReceipts(){
        const { data, error } = await supabase
        .from('receipt')
        .select("*")
        .eq('user', user)
  
        if(data !== undefined){
          setReceiptData(data)
        }else{
          Alert.alert(error.message)
        }
      }
      
      fetchReceipts()
    }

    getUser()
    fetchReceipts()
  }, [userId])

  console.log("home", userId)

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={10} px={3} space={4}>
        <Text fontSize={22} fontWeight={"bold"}>Encontre a conta que seu amigo fez para a saideira!</Text>
        <Link href="searchReceipt" asChild>
          <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
              <HStack space={2} alignItems={'center'}>
                <PlusCircle size={20} color={"white"}/>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Procure a conta pelo código</Text>
              </HStack>
          </Button>
        </Link>
        
        <VStack space={2}>
          <Text fontSize={20} fontWeight={"normal"}>Contas abertas</Text>
          <FlatList data={receiptData} keyExtractor={item => item.id} renderItem={({item}) => <CardReceipt {...item}/>}

          />
        </VStack>
      </VStack>
      <Fab renderInPortal={false} onPress={() => {router.push({pathname: "/newReceipt", params: {userId}})}} bgColor={"black"} shadow={2} icon={<Plus color={"white"} size={30}/>} />
    </>
  )
}