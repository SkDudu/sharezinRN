import { Link } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';
import { Button, HStack, StatusBar, Text, VStack } from 'native-base';
import CardReceipt from '../../components/cardReceipt'

export default function Home() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={10} px={3} space={4}>
        <Text fontSize={22} fontWeight={"bold"}>Encontre a conta que seu amigo fez para a saideira!</Text>
        <Link href="/home/searchReceipt" asChild>
          <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
              <HStack space={2} alignItems={'center'}>
                <PlusCircle size={20} color={"white"}/>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Procure a conta pelo código</Text>
              </HStack>
          </Button>
        </Link>
        
        <VStack space={2}>
          <Text fontSize={20} fontWeight={"normal"}>Contas abertas</Text>
          <CardReceipt />
        </VStack>
      </VStack>
    </>
  )
}