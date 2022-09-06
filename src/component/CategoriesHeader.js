import React from 'react'
import { Text, Box, Image, Input, VStack, Center, View, HStack, Icon, Pressable } from "native-base";
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Colors from '../color'

export default function CategoriesHeader() {
    const navigation = useNavigation();
    const handleSearch = () => {
        navigation.navigate("Searchpage");
    }
    const handleBackButton = () => {
        navigation.goBack();
    }
    const handleCart = () => {
        navigation.navigate("Cartpage");
    }
    return (
        <HStack
            w='full'
            bg={Colors.orange}
            pb={3}
            px={3}
            pt={8}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >


            <VStack w='full' style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Pressable onPress={() => handleBackButton()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>
                <Center flexDirection='row'>
                    <Image size={50} borderRadius={100} source={{
                        uri: "https://shopatone.com/logo.png"
                    }} alt="Alternate Text" />
                    <Text style={{ fontSize: 35, color: 'white', paddingTop: 20 }}>ShopAtOne</Text>
                </Center>
                <View flexDirection='row' w='20%' justifyContent='space-between' >
                    <Pressable onPress={() => handleSearch()}>
                        <Entypo name="magnifying-glass" size={24} color="white" />
                    </Pressable>
                    <Pressable onPress={() => handleCart()}>
                        <Entypo name="shopping-cart" size={24} color="white" />
                    </Pressable>
                </View>
            </VStack>
        </HStack >
    )
}