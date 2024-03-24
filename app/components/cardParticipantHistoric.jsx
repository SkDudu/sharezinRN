import { MapPin, Pin, ReceiptText, Clock } from "lucide-react-native";
import { Avatar, Badge, HStack, NativeBaseProvider, Text, VStack, View } from "native-base";

export default function cardParticipantHistoric(item) {
  return (
    <NativeBaseProvider>
        <View bgColor={"white"} h={"85px"} borderColor={"#eaeaea"} borderWidth={1} borderRadius={"md"} p={3}>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
                <View flexDirection={"row"}>
                    <Avatar bg="green.500" size={"sm"} mr={2} source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        AJ
                    </Avatar>

                    <VStack space={2}>
                        <Text fontSize={20} fontWeight={"normal"}>Nome</Text>
                        <HStack alignItems={"center"} space={1}>
                            <Clock color={"black"} size={18} />
                            <Text>21:23</Text>
                        </HStack>
                    </VStack>
                </View>
                <Text fontSize={20} fontWeight={"normal"}>{item.cost_parcial}</Text>
            </HStack>
        </View>
    </NativeBaseProvider>
  )
}