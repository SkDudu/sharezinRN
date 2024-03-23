import { Link } from "expo-router";
import { MapPin, Pin, ReceiptText } from "lucide-react-native";
import { Badge, HStack, NativeBaseProvider, Pressable, Text, VStack, View } from "native-base";

export default function cardReceiptClosed() {
  return (
    <NativeBaseProvider>
        <Link href="/infoReceipt" asChild>
          <Pressable bgColor={"#ececec"} w={"full"} height={"32"} p={2} rounded={"md"} space={2}>
            <HStack justifyContent={"space-between"}>
              <HStack alignItems={"center"} space={1}>
                <ReceiptText color={"black"} size={22}/>
                <Text fontSize={14} fontWeight={"normal"}>Conta do praiow</Text>
              </HStack>
              <Text fontSize={12} fontWeight={"normal"}>22/03/2024</Text>
            </HStack>
            <HStack alignItems={"center"} space={1}>
              <MapPin color={"#717171"} size={18}/>
              <Text color={"#717171"}>Aldeota</Text>
            </HStack>
            <HStack alignItems={"center"} space={1} pt={3}>
              <Badge borderRadius={10} fontSize={14} px={4} py={2}>Fechada: 22/03/2024 às 13:36</Badge>
            </HStack>
          </Pressable>
        </Link>
    </NativeBaseProvider>
  )
}