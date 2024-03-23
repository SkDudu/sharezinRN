import { StatusBar, VStack, Text } from 'native-base';

export default function newReceipt() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack px={3} space={3}>
        <Text fontSize={20} fontWeight={'normal'} color={"#0b0c10"}>Contas fechadas</Text>
      </VStack>
    </>
  )
}