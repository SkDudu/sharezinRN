import React from 'react';
import { Link } from 'expo-router';
import { Search } from 'lucide-react-native';
import { Button, HStack, Icon, Input, StatusBar, Text, VStack } from 'native-base';

import CardReceiptSearch from '../components/cardReceiptSearch';

export default function index() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={3} px={3} space={3}>
        <Text fontSize={16} fontWeight={'normal'} color={"#8c8c8c"}>Para encontrar alguma conta de seus amigos, insira o código que um de seus amigos compartilhou!</Text>
        <Input variant="outline" placeholder="Pesquisar" placeholderTextColor={"#575960"} bgColor={"white"} fontSize={'md'} autoCapitalize='none' borderColor={"#eaeaea"} borderRadius={6} height={"54px"} px={0} InputLeftElement={<Icon as={<Search size={18} color={"#575960"}/>} px={4}/>}/>
        <CardReceiptSearch />
      </VStack>
    </>
  )
}