import React from 'react'
import { Text, Box, Image, Center, View, HStack, Icon, Pressable, Heading } from "native-base";
import { MaterialCommunityIcons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import Colors from '../color'
export default function Profile({ navigation }) {
  const handleSubmit = (profilescreen) => {
    navigation.navigate(profilescreen)
  }
  return (
    <View>
      <View style={{ backgroundColor: 'white' }}>
        <HStack
          w='full'
          bg={Colors.orange}
          py={6}
          px={3}
          pt={8}
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
      <View style={{ backgroundColor: 'white', marginTop: 5 ,alignItems:'center'}}>
        <Heading>Profile Setting</Heading>
      </View>


      <View
        w='full'
        bg={Colors.white}
        py={5}
        alignItems='center'
        // flexDirection='column'
        justifyContent='center'
      >
        <View w='4/5' pb={5} flexDirection='row' justifyContent='space-between'>
          <View flexDirection='row' >
            <Entypo name="key" size={20} color="orange" />
            <Text style={{ fontSize: 20, color: 'black' }}> Change password</Text>
          </View>
            <Pressable  onPress={() => handleSubmit("Changepasswordpage")}>
              <Feather name="arrow-right" size={24} color="orange"/>
            </Pressable>
        </View>
        <View w='4/5' pb={5} flexDirection='row' justifyContent='space-between'>
          <View flexDirection='row'>
            <FontAwesome name="address-book" size={20} color="orange" />
            <Text style={{ fontSize: 20, color: 'black' }}> Address Book</Text>
          </View>
            <Pressable onPress={() => handleSubmit("Addressbookpage")} >
              <Feather name="arrow-right" size={24} color="orange" />
            </Pressable>
        </View>
      </View>
        <View bg='white' pt={6} alignItems='center' pb={8}>
          <Pressable >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 5 }}>
              <MaterialCommunityIcons name="logout" size={20} color="orange" />
              <Text style={{ fontSize: 20, color: 'orange' }}> Logout</Text>
            </View>
          </Pressable>
        </View>
    </View>
  )
}