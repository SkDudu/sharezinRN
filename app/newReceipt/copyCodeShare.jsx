import React, { useState } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Copy } from 'lucide-react-native';
import { StatusBar, VStack, Text, Input, Icon, Button, View, HStack, IconButton } from 'native-base';

export default function newReceipt() {
    const { code } = useLocalSearchParams();
    const [textToCopy, setTextToCopy] = useState('');

    function copyCode(){
        setTextToCopy(code)
    }

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack height={'full'} pt={4} pb={10} px={3} space={3} justifyContent={'space-between'}>
        <VStack space={3}>
            <View bgColor={"black"} rounded={'md'} p={2}>
                <HStack space={3}>
                    <VStack space={1}>
                    <Text fontSize={"22px"} fontWeight={'medium'} color={"white"}>Conta do praiow</Text>
                    <Text fontSize={"14"} fontWeight={'normal'} color={"white"}>Responsável: Bágri</Text>
                    </VStack>
                </HStack>
            </View>
            <View bgColor={"#ececec"} rounded={'md'} p={2}>
            <HStack>
                <VStack width={"full"} space={3}>
                <Text fontSize={"14px"} fontWeight={'normal'} color={"#575960"}>Quando for finalizado a criação da conta conjunta, será gerado um código para compartilhar.</Text>
                <VStack alignItems={'center'} space={3}>
                    <Text fontSize={"12px"} fontWeight={'normal'} color={"#0b0c10"}>Código de acesso para compartilhar</Text>
                    <Text fontSize={"32px"} fontWeight={'normal'} color={"#0b0c10"}>{code}</Text>
                    <CopyToClipboard text={textToCopy}>
                        <Button onPress={()=>copyCode()} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"white"} rounded={"md"}>
                            <HStack space={2} alignItems={'center'}>
                                <Copy size={20} color={"black"}/>
                                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"black"}>Copiar código</Text>
                            </HStack>
                        </Button>
                    </CopyToClipboard>
                </VStack>
                </VStack>
            </HStack>
            </View>
        </VStack>
            <Link replace href="/home" asChild>
                <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
                    <HStack space={2} alignItems={'center'}>
                        <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Voltar</Text>
                    </HStack>
                </Button>
            </Link>
      </VStack>
    </>
  )
}