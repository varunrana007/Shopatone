import React from 'react'
import { Input, View, Pressable, ScrollView, Image, Center, Box, Text, Heading } from "native-base";
import Colors from '../color';
import Beautyrating from '../productscreen/beautyrating';
import Message from './message';
export default function Reviewpage() {
  return (
    <View bg='white' mt={2} px={4}>
      <Heading pb={4}>Ratings & Reviews</Heading>
      <View pb={2}>
        <Message
          color={Colors.black}
          bg={Colors.grey}
          size={12}
          children={
            'No Rewiew'
          } />
      </View>
      <Box p={5} bg={Colors.white} rounded={5} style={{ borderWidth: 1 }} mb={2} >
        <Text>User Test</Text>
        <Beautyrating value={4} />
        <Text mb={3}>Jan 12 2022</Text>
        <Message
          color={Colors.black}
          bg={Colors.grey}
          size={12}
          children={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          } />
      </Box>
    </View>
  )
}