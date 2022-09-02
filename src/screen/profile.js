import React from 'react'
import { Text, Box, Image, Input, VStack, Center, View, HStack, Icon, Pressable, Heading } from "native-base";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Colors from '../color'
export default function Profile() {
  return (
    <View>
      <View style={{ backgroundColor: 'white' }}>
        <HStack
          w='full'
          px={2}
          bg={Colors.orange}
          py={6}
          alignItems='center'
        >
          <View >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Center>
                <Image size={50} borderRadius={100} source={{
                  uri: "https://shopatone.com/logo.png"
                }} alt="Alternate Text" />
              </Center>
              <Text style={{ fontSize: 35, color: 'white', paddingTop: 20 }}>ShopAtOne</Text>
            </View>
          </View >

        </HStack >
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <FontAwesome name="user-circle-o" size={100} color="grey" />
        </View>
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>User Name : Test </Text>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>Email ID: Test@gmail.com</Text>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Mobile No : 9865327412</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 5 ,paddingLeft:15}}>
        <Heading>Profike Setting</Heading>
        <View style={{paddingTop:20,paddingBottom:20,borderWidth:2,borderColor:'grey'}}>
          <Text style={{ fontSize:20}}>
          <Entypo name="key" size={24} color="black" />
                Change Password
          </Text>
        </View>
      </View>
    </View>
  )
}