import React from 'react';
import { Link } from 'expo-router';
import { Search } from 'lucide-react-native';
import { Button, HStack, Icon, Input, StatusBar, Text, VStack, View } from 'native-base';

import CardReceiptSearch from '../components/cardReceiptSearch';

export default function index() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack height={"full"} mt={3} px={3} pb={"30px"} space={3} justifyContent={'space-between'}>
        <View>
            <View bgColor={"black"} rounded={'md'} p={2}>
                <VStack space={1} alignItems={'center'}>
                    <Text fontSize={"12px"} fontWeight={'normal'} color={"white"}>Sua parte da conta compartilhada até agora</Text>
                    <Text fontSize={"40px"} fontWeight={'normal'} color={"white"}>R$ 5,99</Text>
                </VStack>
            </View>
            <View bgColor={"white"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
                <VStack space={2}>
                    <Input variant="outline" placeholder="Nome do pedido" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} borderColor={"#eaeaea"} borderRadius={6} height={"54px"} />
                    <Input variant="outline" placeholder="Valor do pedido" placeholderTextColor={"#575960"} keyboardType='number-pad' bgColor={"white"} fontSize={'md'} borderColor={"#eaeaea"} borderRadius={6} height={"54px"} />
                </VStack>
            </View>
        </View>
        <VStack space={2} mb={4}>
          <Link href="/home" asChild>
            <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Adicionar pedido</Text>
            </Button>
          </Link>
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