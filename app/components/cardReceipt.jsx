import { Link } from "expo-router";
import { MapPin, Pin, ReceiptText } from "lucide-react-native";
import { Badge, HStack, NativeBaseProvider, Pressable, Text, VStack, View } from "native-base";

export default function cardReceipt(item) {
  const date = new Date(item.created_at);

  return (
    <NativeBaseProvider>
      <Link href={{pathname: "/receiptDetails", params: {receiptId: item.id}}} asChild>
        <Pressable bgColor={"#ececec"} w={"full"} height={"32"} p={2} rounded={"md"} space={2} mb={2}>
          <HStack justifyContent={"space-between"} pb={2}>
            <HStack alignItems={"center"} space={1}>
              <ReceiptText color={"black"} size={22}/>
              <Text fontSize={14} fontWeight={"normal"}>{item.name_receipt}</Text>
            </HStack>
            <Text fontSize={12} fontWeight={"normal"}>{date.toLocaleString()}</Text>
          </HStack>
          <HStack alignItems={"center"} space={1}>
            <MapPin color={"#717171"} size={18}/>
            <Text color={"#717171"}>{item.restaurant_name}</Text>
          </HStack>
          <HStack alignItems={"center"} space={1} pt={3}>
            <Badge borderRadius={10} fontSize={14} px={4} py={2}>Dono</Badge>
            <Badge borderRadius={10} fontSize={14} px={4} py={2}>Novo</Badge>
          </HStack>
        </Pressable>
      </Link>
    </NativeBaseProvider>
  )
}