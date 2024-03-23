import { Link } from 'expo-router';
import { EllipsisVertical, Music4, Percent } from 'lucide-react-native';

import { Button, HStack, Icon, IconButton, StatusBar, Text, VStack, View } from 'native-base';

export default function index() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack px={3} space={4}>
        <View bgColor={"black"} rounded={'md'} p={2}>
          <HStack justifyContent={'space-between'}>
            <VStack space={1}>
              <Text fontSize={"22px"} fontWeight={'medium'} color={"white"}>Conta do praiow</Text>
              <Text fontSize={"14"} fontWeight={'normal'} color={"white"}>Responsável: Bágri</Text>
            </VStack>
            <IconButton icon={<Icon as={<EllipsisVertical color={"white"} size={18}/>} />}/>
          </HStack>
          <VStack alignItems={'center'} mt={6}>
            <Text fontSize={"12"} fontWeight={'normal'} color={"white"}>Seu consumo total</Text>
            <Text fontSize={"40"} fontWeight={'normal'} color={"white"}>R$ 0</Text>
          </VStack>
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
                  <Text fontSize={"16"} fontWeight={'normal'} color={"#4e4e4e"}>10%</Text>
                </VStack>
              </View>
              <View w={"49%"} bgColor={"white"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
                <VStack>
                  <HStack alignItems={'center'} space={1}>
                    <Music4 size={18} color={"black"}/>
                    <Text fontSize={"18"} fontWeight={'normal'} color={"black"}>Cover</Text>
                  </HStack>
                  <Text fontSize={"16"} fontWeight={'normal'} color={"#4e4e4e"}>R$ 15,00</Text>
                </VStack>
              </View>
            </HStack>
          </View>
        </View>
        <View>
          <Text fontSize={"22px"} fontWeight={'medium'} color={"black"} pb={2}>Participantes</Text>
        </View>
      </VStack>
    </>
  )
}