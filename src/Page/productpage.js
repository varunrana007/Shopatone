import React, { useState } from 'react'
import { Input, View, Pressable, ScrollView, Image, Center, Box, Text, Heading } from "native-base";
import Colors from '../color';
import CategoriesHeader from '../component/CategoriesHeader'
import Beautyrating from '../productscreen/beautyrating';
import NumericInput from "react-native-numeric-input"
import Reviewpage from './reviewpage';
import Offer from './offer';
export default function Productpage({ route, navigation }) {
  const [value, setValue] = useState(0);
  return (
    <>
      <CategoriesHeader />
      <ScrollView  >
        <ScrollView horizontal={true} >
          <Center >
            <Box w='full' bg='white' flexDirection='row' px={5}>
              {
                route?.params?.sampleImage?.map((img, index) => {
                  console.log(img);
                  return (
                    <Image source={{ uri: img }} alt="Alternate Text" w="80" h="80" resizeMode='contain' key={index} />
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
              value={value}
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
            />
          </View>
        </View>
        <View>
          <Offer />
        </View>
        <View bg='white'>
          <Heading>Description</Heading>
          <Text fontSize={20}>{route?.params?.description}</Text>
        </View>
        <View>
          <Reviewpage />
        </View>
      </ScrollView>
    </>
  )
}