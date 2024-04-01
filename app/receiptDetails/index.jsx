import React, { useEffect, useState } from 'react';
import { Link, router, useLocalSearchParams  } from 'expo-router';

import {supabase} from "../../lib/supabase"

import { EllipsisVertical, Music4, Pencil, Percent, PlusCircle, ReceiptIcon, ReceiptText, SquareArrowOutUpRight, SquareX } from 'lucide-react-native';
import { Actionsheet, AlertDialog, Button, FlatList, HStack, Icon, IconButton, Pressable, StatusBar, Text, VStack, View, useDisclose, useToast } from 'native-base';

import CardParticipantHistoric from '../components/cardParticipantHistoric';
import CardParticipantEmpty from '../components/cardParticipantEmpty';

export default function index() {
  const { receiptId } = useLocalSearchParams();
  const toast = useToast()
  const {isOpen, onOpen, onClose} = useDisclose();

  const [userId, setUserId] = useState()
  
  const [isOpenDialog, setIsOpen] = React.useState(false);
  const onCloseDialog = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  //Receipts
  const [name_receipt, setName_receipt] = useState()
  const [restaurant_name, setRestaurant_name] = useState()
  const [cost_total, setCost_total] = useState()
  const [tax_garcom, setTax_garcom] = useState()
  const [tax_cover, setTax_cover] = useState()

  //Historic
  const [historicData, setHistoricData] = useState()

  async function getUser(){
    const { data: { user } } = await supabase.auth.getUser()
    if(user !== undefined){
      setUserId(user?.id)
    }
  }

  useEffect(() => {
    async function fetchReceiptById(){
      const { data, error } = await supabase
      .from('receipt')
      .select(`
          id,
          created_at,
          restaurant_name,
          name_receipt,
          cost_total,
          tax_cover,
          tax_garcom
        `)
      .eq('id', receiptId)

      if(data !== null && data !== undefined){
        setName_receipt(data[0].name_receipt)
        setRestaurant_name(data[0].restaurant_name)
        setCost_total(data[0].cost_total)
        setTax_cover(data[0].tax_cover)
        setTax_garcom(data[0].tax_garcom)
      }else{
        Alert.alert(error.message)
      }
    }

    async function fetchHsitoricByReceiptId(){
      const {data, error} = await supabase
      .from('historic')
      .select()
      .eq("receipt_id", receiptId)
      .order('created_at', { ascending: false })

      if(error){
        toast.show({
          description: "Problemas em recuperar dados, feche o aplicativo e abra novamente.",
          placement: "bottom",
          variant: "solid",
        })
      }else if(data !== null && data !== undefined){
        setHistoricData(data)
      }
    }

    getUser()
    fetchReceiptById()
    fetchHsitoricByReceiptId()
  }, [])

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={3} px={3} space={4}>
        <View bgColor={"black"} rounded={'md'} p={2}>
          <HStack justifyContent={'space-between'}>
            <VStack space={1}>
              <Text fontSize={"22px"} fontWeight={'medium'} color={"white"}>{name_receipt}</Text>
              <Text fontSize={"14"} fontWeight={'normal'} color={"white"}>{restaurant_name}</Text>
            </VStack>
            <IconButton onPress={onOpen} icon={<Icon as={<EllipsisVertical color={"white"} size={18}/>} />}/>
          </HStack>
          <VStack alignItems={'center'} mt={6}>
            <Text fontSize={"12"} fontWeight={'normal'} color={"white"}>Seu consumo total</Text>
            <Text fontSize={"40"} fontWeight={'normal'} color={"white"}>{cost_total}</Text>
          </VStack>
            <Button onPress={() => {router.push({pathname: "/receiptDetails/addCost", params: {cost_total, userId, receiptId}})}} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"white"} rounded={"md"}>
              <HStack space={2} alignItems={'center'}>
                <PlusCircle size={20} color={"black"}/>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"black"}>Adicionar valor</Text>
              </HStack>
            </Button>
        </View>
        <View>
          <Text fontSize={"22px"} fontWeight={'medium'} color={"black"} pb={2}>Informação geral da conta</Text>
          <View bgColor={"white"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
            <VStack alignItems={'center'}>
              <Text fontSize={"12"} fontWeight={'normal'} color={"black"}>Custo total da conta compartilhada</Text>
              <Text fontSize={"40"} fontWeight={'normal'} color={"black"}>R$ 23,30</Text>
            </VStack>
          </View>
          <View mt={2}>
            <HStack space={0} justifyContent={'space-between'}>
              <View w={"49%"} bgColor={"white"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
                <VStack>
                  <HStack alignItems={'center'} space={1}>
                    <Percent size={18} color={"black"}/>
                    <Text fontSize={"18"} fontWeight={'normal'} color={"black"}>Taxa garçom</Text>
                  </HStack>
                  <Text fontSize={"16"} fontWeight={'normal'} color={"#4e4e4e"}>{tax_garcom}</Text>
                </VStack>
              </View>
              <View w={"49%"} bgColor={"white"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
                <VStack>
                  <HStack alignItems={'center'} space={1}>
                    <Music4 size={18} color={"black"}/>
                    <Text fontSize={"18"} fontWeight={'normal'} color={"black"}>Cover</Text>
                  </HStack>
                  <Text fontSize={"16"} fontWeight={'normal'} color={"#4e4e4e"}>{tax_cover}</Text>
                </VStack>
              </View>
            </HStack>
          </View>
        </View>
        <View>
          <Text fontSize={"22px"} fontWeight={'medium'} color={"black"} pb={2}>Histórico de pedidos</Text>
          {historicData==null ? <CardParticipantEmpty /> : <FlatList data={historicData} keyExtractor={item => item.id} renderItem={({item}) => <CardParticipantHistoric {...item}/>}/>}
        </View>
      </VStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>
            <HStack alignItems={'center'} space={2}>
              <Pencil size={18} color={"black"}/>
              <Text fontSize={"16px"} fontWeight={"normal"}>Editar informações da conta</Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <HStack alignItems={'center'} space={2}>
              <SquareArrowOutUpRight size={18} color={"black"}/>
              <Text fontSize={"16px"} fontWeight={"normal"}>Compartilhar conta</Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <HStack alignItems={'center'} space={2}>
              <ReceiptText size={18} color={"black"}/>
              <Text fontSize={"16px"} fontWeight={"normal"}>Resumo da sua conta</Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Pressable onPress={() => setIsOpen(!isOpenDialog)}>
              <HStack alignItems={'center'} space={2}>
                <SquareX size={18} color={"#FF0000"}/>
                <Text fontSize={"16px"} fontWeight={"normal"} color={"#FF0000"}>Encerrar a conta compartilhada</Text>
              </HStack>
            </Pressable>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenDialog} onClose={onCloseDialog}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Encerrar conta compartilhada?</AlertDialog.Header>
          <AlertDialog.Body>
            Você deseja encerrar essa conta compartilhada?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onCloseDialog} ref={cancelRef}>
                Não
              </Button>
              <Button bgColor={"black"} onPress={onCloseDialog}>
                Sim
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  )
}