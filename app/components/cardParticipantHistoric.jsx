import { MapPin, Pin, ReceiptText, Clock } from "lucide-react-native";
import { Avatar, Badge, HStack, NativeBaseProvider, Text, VStack, View } from "native-base";

export default function cardParticipantHistoric(item) {
  return (
    <NativeBaseProvider>
        <View bgColor={"white"} h={"95px"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
            <VStack justifyContent={"space-between"} space={2}>
                <HStack justifyContent={"space-between"}>
                    <HStack>
                        <Avatar bg="green.500" size={"sm"} mr={2} source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                            AJ
                        </Avatar>
                        <Text fontSize={20} fontWeight={"normal"} isTruncated>{item.user}</Text>
                    </HStack>

                    <HStack alignItems={"center"} space={1}>
                        <Clock color={"black"} size={18} />
                        <Text>21:23</Text>
                    </HStack>
                </HStack>
                <HStack justifyContent={"space-between"}>
                    <Text fontSize={20} fontWeight={"normal"}>{item.product_name}</Text>
                    <Text fontSize={20} fontWeight={"normal"}>R$ {item.cost_parcial}</Text>
                </HStack>
            </VStack>
        </View>
    </NativeBaseProvider>
  )
}