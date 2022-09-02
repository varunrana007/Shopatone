import React from 'react'
import { Text, Box, Image, Heading, Input, VStack, Button, Center, View} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Colors from '../color'
export default function Login() {
  return (
    <>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        alignItems="center"
      >
        <Center>
          <Image size={60} borderRadius={100} source={{
            uri: "https://shopatone.com/logo.png"
          }} alt="Alternate Text" />
        </Center>
        <VStack space={10} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color="orange" />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            size='2xl'
            pl={2}
            color={"black"}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color="orange" />}
            variant="underlined"
            placeholder="********"
            w="70%"
            size='2xl'
            type="password"
            pl={2}
            color={"black"}
          />
          <Button
            _pressed={{ bg: '#f5b942' }}
             w="40" rounded={60} bg={Colors.orange} color={"black"} >Login</Button>
          <View style={{flexDirection: 'row'}}>
            <Text color={Colors.orange}>Don't have an Account?</Text>
            <Pressable>
              <Text color={Colors.orange}> SIGN UP</Text>
            </Pressable>
          </View>
        </VStack>
      </Box >
    </>
  )
}