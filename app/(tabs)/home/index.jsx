import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';

import {supabase} from "../../../lib/supabase"

import { Plus, PlusCircle } from 'lucide-react-native';
import { Button, Fab, FlatList, HStack, Icon, StatusBar, Text, VStack } from 'native-base';

import CardReceipt from '../../components/cardReceipt'

export default function Home() {
  const [receiptData, setReceiptData] = useState()

  useEffect(() => {
    async function fetchReceipts(){
      const { data, error } = await supabase
      .from('receipt')
      .select("*")

      if(data){
        setReceiptData(data)
      }else{
        Alert.alert(error.message)
      }
    }

    fetchReceipts()
  }, [])

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
      <Button onPress={() => {router.push("/newReceipt")}} width={"60px"} height={"60px"} bgColor={"black"} shadow={2} borderRadius={'full'} top={450} left={300}>
        <Plus color={"white"}/>
      </Button>
    </>
  )
}