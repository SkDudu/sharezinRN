import React, { useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import {supabase} from "../../lib/supabase"
import { MapPin, ReceiptText, Search } from 'lucide-react-native';
import { AlertDialog, Button, FlatList, HStack, Icon, Input, Pressable, StatusBar, Text, VStack, View, useToast } from 'native-base';

export default function index() {
  const toast = useToast();
  const { userId } = useLocalSearchParams();
  const [name_receipt, setName_receipt] = useState()
  const [restaurant_name, setRestaurant_name] = useState()
  const [create_at, setCreate_at] = useState()
  const [receiptId, setReceiptId] = useState()
  const [codeReceipt, setCodeReceipt] = useState('')
  const [receiptResponse, setReceiptResponse] = useState()

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const [loading, setLoading] = useState(false)

  const date = new Date()

  async function getReceiptByCodeInvite(){
    setLoading(true)
    const {data, error} = await supabase
    .from('receipt')
    .select('*')
    .eq('codeInvite', codeReceipt)
    .neq("user", userId)

    if(data == 0){
      setReceiptResponse(null)
      toast.show({
        description: "Não existe esse recibo.",
        placement: "top",
        variant: "solid",
      })
      setLoading(false)
    }else if(data || null){
      setReceiptId(data[0].id)
      setName_receipt(data[0].name_receipt)
      setRestaurant_name(data[0].restaurant_name)
      setCreate_at(data[0].create_at)
      setReceiptResponse(data)
      setLoading(false)
    }
  }

  async function setParticipantInReceipt(){
    setLoading(true)
    const {data, error} = await supabase
    .from('participant')
    .insert({
      user: userId,
      cost: 0,
      receipt_id: receiptId,
      is_closed: false,
      is_owner: false,
      updated_at: date.toLocaleDateString()
    })
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack h={"full"} mt={3} pb={6} px={3} space={3} justifyContent={'space-between'}>
        <VStack space={3}>
          <Text fontSize={16} fontWeight={'normal'} color={"#8c8c8c"}>Para encontrar alguma conta de seus amigos, insira o código que um de seus amigos compartilhou!</Text>
          <Input 
            variant="outline" 
            placeholder="Pesquisar" 
            placeholderTextColor={"#575960"} 
            value={codeReceipt} 
            onChangeText={setCodeReceipt}
            bgColor={"white"} 
            fontSize={'md'} 
            autoCapitalize='none' 
            borderColor={"#eaeaea"} 
            borderRadius={6} 
            height={"54px"} 
            px={0} 
            InputLeftElement={<Icon as={<Search size={18} color={"#575960"}/>} px={4}/>}
          />
          
          {
            receiptResponse !== null && receiptResponse !== undefined
            ? 
            <Pressable onPress={() => setIsOpen(!isOpen)} justifyContent={'center'} bgColor={"#ececec"} w={"full"} height={"70px"} p={2}  rounded={"md"}>
              <HStack justifyContent={"space-between"} pb={2}>
                <HStack alignItems={"center"} space={1}>
                  <ReceiptText color={"black"} size={22}/>
                  <Text fontSize={14} fontWeight={"normal"}>{name_receipt}</Text>
                </HStack>
                <Text fontSize={12} fontWeight={"normal"}>{create_at}</Text>
              </HStack>
              <HStack alignItems={"center"} space={1}>
                <MapPin color={"#717171"} size={18}/>
                <Text color={"#717171"}>{restaurant_name}</Text>
              </HStack>
            </Pressable>
            : 
            null
          }

          <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Entrar na conta compartilhada?</AlertDialog.Header>
              <AlertDialog.Body>
                Você deseja entrar na conta compartilhada?
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                    Cancelar
                  </Button>
                  <Button bgColor={"black"} onPress={onClose}>
                    Entrar
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </VStack>
        <Button onPress={() => {getReceiptByCodeInvite()}} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
          <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>{loading ? "Pesquisando..." : "Pesquisar"}</Text>
        </Button>
      </VStack>
    </>
  )
}