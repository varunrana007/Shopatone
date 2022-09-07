import React, { useState } from 'react'
import { Input, View, Pressable, ScrollView, Image, Center, Box, Text, Heading, Button, Flex } from "native-base";
import Colors from '../color';
import { FontAwesome } from '@expo/vector-icons';
import { offerproduct } from '../product/offerproduct'
export default function Offer() {
    return (
        <View bg='white' py={2} px={2}>
            <View flexDirection='row' alignItems='center' pb={2} bg='white' pl={2}>
                <FontAwesome name="gift" size={24} color="orange" />
                <Text pl={1} fontSize='20' color='orange.400'>
                    Offers
                </Text>
            </View>
            <ScrollView horizontal={true}>
                {offerproduct.map((item,index) => (
                    <Button variant="outline" colorScheme='orange' mr={4} key={index}>
                        {item}
                    </Button>
                ))}
            </ScrollView >

        </View>
    )
}