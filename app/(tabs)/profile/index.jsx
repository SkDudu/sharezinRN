import React from 'react';
import { Link, router } from 'expo-router';
import { Plus, PlusCircle } from 'lucide-react-native';
import { AlertDialog, Button, Fab, HStack, Icon, StatusBar, Text, VStack, View } from 'native-base';

export default function Profile() {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => {
        setIsOpen(false)
        router.replace('/signIn')
    };
    const cancelRef = React.useRef(null);

    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <VStack height={"full"} mt={12} px={3} pb={"50px"} space={4} justifyContent={'space-between'}>
                <View>
                    <Text fontSize={22} fontWeight={"normal"}>Profile</Text>
                </View>
                <VStack space={2} mb={4}>
                    <Button onPress={() => setIsOpen(!isOpen)} width={"full"} height={"56px"} alignItems={"center"} justifyContent={'center'} bgColor={"#FF0000"} rounded={"md"}>
                        <Text alignSelf={"center"} fontSize={'md'} fontWeight={'semibold'} color={"white"}>Finalizar sessão</Text>
                    </Button>
                </VStack>
            </VStack>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Finalizar sessão?</AlertDialog.Header>
                <AlertDialog.Body>
                    Você deseja finalizar sua sessão?
                </AlertDialog.Body>
                <AlertDialog.Footer>
                    <Button.Group space={2}>
                        <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                            Não
                        </Button>
                        <Button w={"70px"} bgColor={"#FF0000"} onPress={onClose}>
                            Sim
                        </Button>
                    </Button.Group>
                </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </>
    )
}