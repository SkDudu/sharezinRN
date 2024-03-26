import React from 'react';
import { MapPin, Pin, ReceiptText } from "lucide-react-native";
import { AlertDialog, Badge, Button, HStack, NativeBaseProvider, Pressable, Text, VStack, View } from "native-base";

export default function cardReceiptSearch(item) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const date = new Date(item.created_at);

  return (
    <NativeBaseProvider>
      <Pressable onPress={() => setIsOpen(!isOpen)} justifyContent={'center'} bgColor={"#ececec"} w={"full"} height={"70px"} p={2}  rounded={"md"}>
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
      </Pressable>

      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Entrar na conta compartilhada?</AlertDialog.Header>
          <AlertDialog.Body>
            Você deseja entrar na conta compartilhada?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancelar
              </Button>
              <Button bgColor={"black"} onPress={onClose}>
                Entrar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </NativeBaseProvider>
  )
}