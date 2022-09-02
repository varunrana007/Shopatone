import React from 'react'
import { Text, Box, Image, Heading, Input, VStack, Button, Center, View } from "native-base";
import { MaterialIcons, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import Colors from '../color'
export default function Register() {
    return (
        <>
            <Box
                w="full"
                h="full"
                position="absolute"
                top="0"
                px="3"
                justifyContent="center"
                alignItems="center"
            >
                <Text style={{ fontSize: 20, color:'orange' }}>ShopAtOne Dev </Text>
                <VStack space={10} pt="6">
                    <Input
                        InputLeftElement={
                            <AntDesign name="user" size={24} color="orange" />}
                        variant="underlined"
                        placeholder="Enter Name"
                        w="70%"
                        size='2xl'
                        pl={2}
                        color={"black"}
                    />
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
                            <FontAwesome name="phone-square" size={24} color="orange" />}
                        variant="underlined"
                        placeholder="E.g. +91 ......."
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
                        w="70" rounded={60} bg={Colors.orange} color={"black"} >SignUp</Button>

                </VStack>
            </Box >
        </>
    )
}