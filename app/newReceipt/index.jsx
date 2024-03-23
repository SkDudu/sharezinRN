import { Link } from 'expo-router';
import { Music4, Percent, QrCode, User, Utensils } from 'lucide-react-native';
import { StatusBar, VStack, Text, Input, Icon, Button, View } from 'native-base';

export default function newReceipt() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack height={'full'} pt={2} px={3} space={3} justifyContent={'space-between'}>
        <VStack space={3}>
          <Text fontSize={16} fontWeight={'normal'} color={"#8c8c8c"}>Insira as informações para criar uma conta compartilhada!</Text>
          <Input 
            variant="outline" 
            placeholder="Nome do recibo" 
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<User size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Nome do restaurante" 
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<Utensils size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Taxa garçom" 
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<Percent size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Taxa cover" 
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<Music4 size={18} color={"#575960"}/>} px={4}/>}
          />
          <Input 
            variant="outline" 
            placeholder="Código de compartilhamento" 
            placeholderTextColor={"#575960"} 
            bgColor={"white"} fontSize={'md'} 
            borderColor={"#eaeaea"} 
            borderRadius={6} height={"54px"} px={0} 
            InputLeftElement={
            <Icon as={<QrCode size={18} color={"#575960"}/>} px={4}/>}
          />
        </VStack>
        <VStack space={2} mb={4}>
          <Link href="/newReceipt/copyCodeShare" asChild>
            <Button width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#0b0c10"} rounded={"md"}>
                <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Criar recibo</Text>
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