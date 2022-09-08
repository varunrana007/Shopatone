import React, { useState } from 'react'
import { Input, View, Pressable, ScrollView, Image, Center, Box, Text, Heading, Button } from "native-base";
import Colors from '../color';
import CategoriesHeader from '../component/CategoriesHeader'
import Beautyrating from '../productscreen/beautyrating';
import NumericInput from "react-native-numeric-input";
import Reviewpage from './reviewpage';
import Offer from './offer';
import { useNavigation } from "@react-navigation/native";
export default function Productpage({ route }) {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const handleCart = (item) => {
    navigation.navigate("Cartpage" ,item);
  }
  console.log(route)
  return (
    <>
      <CategoriesHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Center >
            <Box w='full' bg='white' flexDirection='row' px={5}>

              {
                route?.params?.sampleImage?.map((img, index) => {
                  return (
                    <Image source={{ uri: img }} alt="Alternate Text" w="80" h="250" resizeMode='contain' key={index} />
                  )
                })
              }
            </Box>
          </Center>
        </ScrollView>
        <View >
          <View mt={1} pb={3} bg='white' pl={1}>
            <Text fontSize={20}>{route?.params?.name}</Text>
            <Text fontSize={20}>{route?.params?.name1}</Text>
            <Beautyrating value={route?.params?.rating} />
          </View>
          <View mb={1} bg='white' pl={2} pr={2} flexDirection='row' justifyContent='space-between'>
            <Text fontSize={20}>₹{route?.params?.price}</Text>
            <NumericInput
              value={quantity}
              totalWidth={100}
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
          </View>
        </View>
        <View>
          <Offer />
        </View>
        <View bg='white' px={4}>
          <Heading>Description</Heading>
          <Text fontSize={15}>{route?.params?.description}</Text>
        </View>
        <View>
          <Reviewpage />
        </View>
      </ScrollView>
      <View flexDirection='row'>

        <Button fontSize={15} variant="outline" colorScheme='orange' py={5} px={10} flexGrow={1}>Buy Now</Button>
        <Button fontSize={15} variant="outline" colorScheme='orange' py={5} px={10} onPress={() => handleCart(route?.params)} flexGrow={1}>Add Cart</Button>
      </View>
    </>
  )
}