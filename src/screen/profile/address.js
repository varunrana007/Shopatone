import React from "react";
import { Image, ScrollView, Flex, Pressable, View, Text, onPress, Box, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Address() {
    const navigation = useNavigation();
    const handleAddressBook = () => {
        navigation.navigate('Addressbookpage')
    }
    return (
        <>
        <ScrollView>
        <Text>Hello</Text>
        </ScrollView>

            <View mx={4} mb={6}>
                <Button colorScheme='orange'  onPress={() => handleAddressBook()}>Add New Address</Button>
            </View>
        </>
    )
}