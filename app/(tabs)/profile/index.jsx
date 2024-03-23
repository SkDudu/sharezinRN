import { Link, router } from 'expo-router';
import { Plus, PlusCircle } from 'lucide-react-native';
import { Button, Fab, HStack, Icon, StatusBar, Text, VStack } from 'native-base';

export default function Profile() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <VStack mt={12} px={3} space={4}>
        <Text fontSize={22} fontWeight={"normal"}>Profile</Text>
      </VStack>
    </>
  )
}