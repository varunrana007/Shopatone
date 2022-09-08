import React, { useState } from 'react';
import { Text, Box, View, Flex, Pressable, Image, ScrollView, Heading, Value, Button, Popover } from "native-base";
import CategoriesHeader from '../component/CategoriesHeader';
import { useNavigation } from "@react-navigation/native";
import NumericInput from "react-native-numeric-input"
import Colors from '../color';
import Beautyrating from '../productscreen/beautyrating';
import { AntDesign, Entypo } from '@expo/vector-icons';
export default function Cartpage({ route, navigation }) {
  const [quantity, setQuantity] = useState(1);
  // console.log('cart', route?.params);
  return (

    <>
      <ScrollView >
        <CategoriesHeader />
        <View bg='white' flexDirection='row' justifyContent='space-between' >
        <Text>Select Address</Text>
        <Button colorScheme="orange"><Text fontSize={10}>Select</Text></Button>
        </View>
        <Box bg='white' w='100%' rounded="lg" flexDirection='row' py={4} pl={4} mt={2}>
          <View >
            <Image source={{ uri: route?.params?.image }} alt="Alternate Text" w="100" h="100" resizeMode='contain' />
            <NumericInput
              value={quantity}
              totalWidth={90}
              totalHeight={30}
              iconSize={20}
              step={1}
              maxValue={15}
              minValue={0}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.orange}
              leftButtonBackgroundColor={Colors.orange}
              onChange={setQuantity}
            />
          </View >
          <View flexDirection='column'>
            <Text fontSize={20} isTruncated pb={1}>{route?.params?.name}</Text>
            <Text fontSize={12} isTruncated pb={1}>{route?.params?.name1}</Text>
            <Beautyrating value={route?.params?.rating} />
            <Text fontSize={15} isTruncated fontWeight='bold' pt={2}> ₹{route?.params?.price}</Text>
          </View>
        </Box>
        <View flexDirection='row' bg='white'>
          <Button variant="outline" colorScheme='orange' py={3} px={10} flexGrow={1}>
            <View flexDirection='row' >
              <AntDesign name="delete" size={18} color="orange" />
              <Text ml={1} fontSize={15} color='#f59542'>Remove</Text>
            </View>
          </Button>
          <Button fontSize={15} variant="outline" colorScheme='orange' py={3} px={7} flexGrow={1}>

            <View flexDirection='row'>
              <Entypo name="flash" size={24} color="orange" />
              <Text ml={1} fontSize={15} color='#f59542'>Buy this Now</Text>
            </View>
          </Button>
        </View>
        <View bg='white' mt={1}>
          <Text fontWeight='bold' fontSize={18} px={3} py={4} >PRICE DETAILS </Text>
          <View justifyContent='space-between' flexDirection='row' px={2}>
            <Text fontWeight='bold'> Price (1 item)</Text>
            <Text fontWeight='bold'>₹{route?.params?.price}</Text>
          </View>
          <View justifyContent='space-between' flexDirection='row' px={2} pt={2}>
            <Text fontWeight='bold'> Discount</Text>
            <Text fontWeight='bold' > -₹700</Text>
          </View>
          <View justifyContent='space-between' flexDirection='row' px={2} pt={2}>
            <Text fontWeight='bold'> Delivery Charges</Text>
            <Text fontWeight='bold' > Free</Text>
          </View>
          <View px={2} pt={4}>
            <View flexDirection='row'  justifyContent='space-between'>
              <Text fontWeight='bold'> Total Amount</Text>
              <Text fontWeight='bold' > ₹{route?.params?.price}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
        <Box bg="white" p="2" rounded="lg">
          <View flexDirection='row' justifyContent='space-between'>

            <Text fontWeight='bold' py={2}>
            ₹{route?.params?.price}
            </Text>
            <Button colorScheme='orange' >
              Proceed to Buy
            </Button>
          </View>
        </Box>
    </>
  )
}