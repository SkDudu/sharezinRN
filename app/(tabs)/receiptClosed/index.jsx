import { StatusBar, VStack, Text } from 'native-base';

import CardReceiptClosed from '../../components/cardReceiptClosed';

export default function ReceiptClosed() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={12} px={3} space={3}>
        <Text fontSize={20} fontWeight={'normal'} color={"#0b0c10"}>Contas fechadas</Text>
        <CardReceiptClosed />
      </VStack>
    </>
  )
}