import { Link } from "expo-router";
import { Ban, MapPin, Pin, ReceiptText } from "lucide-react-native";
import { Badge, HStack, NativeBaseProvider, Pressable, Text, VStack, View } from "native-base";

export default function cardReceiptEmpty() {
  return (
    <NativeBaseProvider>
        <View bgColor={"#ececec"} w={"full"} height={"64px"} p={2} rounded={"md"} space={2} mb={2}>
          <VStack alignItems={"center"} justifyContent={"center"}>
            <Ban color={"black"} />
            <Text>Você não tem nenhum recibo aqui!</Text>
          </VStack>
        </View>
    </NativeBaseProvider>
  )
}