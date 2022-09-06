import React, { useState } from 'react'
import { Input, View, Pressable, ScrollView, Image, Center, Box, Text, Heading, Button } from "native-base";
import Colors from '../color';
import { FontAwesome } from '@expo/vector-icons';
export default function Offer() {
    return (
        <>
            <View flexDirection='row' alignItems='center' pb={2} bg='white' pl={2}>
                <FontAwesome name="gift" size={24} color="orange" />
                <Text pl={1} fontSize='20' color='orange.400'>
                    Offers
                </Text>
            </View>
            <ScrollView horizontal={true} >
                <View flexDirection='column'>
                    <Box bg={Colors.white} mb={1} p="2" rounded={5} >
                        <View flexDirection='row' justifyContent='space-between'>
                            <Button variant="outline" colorScheme='orange' mr={4}>
                                Buy more
                            </Button>
                            <Button variant="outline" colorScheme="orange" mr={4}>
                                No Cost EMi
                            </Button>
                            <Button variant="outline" colorScheme="orange" mr={4}>
                                Cash Back
                            </Button>
                            <Button variant="outline" colorScheme="orange" mr={4}>
                                Bank Offer
                            </Button>
                            <Button variant="outline" colorScheme="orange" mr={4}>
                                Dash on Delivery
                            </Button>
                        </View>
                    </Box>
                </View>
            </ScrollView >

        </>
    )
}