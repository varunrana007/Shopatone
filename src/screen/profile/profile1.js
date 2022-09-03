import React from 'react'
import { Text, Box, Image, Center, View, HStack, Icon, Pressable, Heading } from "native-base";
import { MaterialCommunityIcons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import Colors from '../../color'
export default function Profile({navigation}) {
  const handleSubmit =(profilescreen)=>{
    navigation.navigate(profilescreen)
  }
  return (
    <View>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <FontAwesome name="user-circle-o" size={100} color="grey" />
        </View>
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>User Name : Test </Text>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>Email ID: Test@gmail.com</Text>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Mobile No : 9865327412</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', marginTop: 5, paddingLeft: 15, paddingRight: 15 }}>
        <Heading>Profile Setting</Heading>
      </View>


      <View
        w='full'
        px={0}
        bg={Colors.white}
        py={5}
        alignItems='center'
      >
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 5
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 5 }}>
            <Entypo name="key" size={20} color="orange" />
            <Text style={{ fontSize: 20, color: 'black' }}> Change password</Text>
          </View>

          <Pressable ml={1} onPress={() => handleSubmit("Changepasswordpage")}>
            <Feather name="arrow-right" size={24} color="orange" style={{ paddingLeft: 150 }} />
          </Pressable>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 5 }}>
            <FontAwesome name="address-book" size={20} color="orange" />
            <Text style={{ fontSize: 20, color: 'black' }}> Address Book</Text>
          </View>

          <Pressable ml={1}  onPress={() => handleSubmit("Addressbookpage")} >
            <Feather name="arrow-right" size={24} color="orange" style={{ paddingLeft: 175 }} />
          </Pressable>
        </View>
        <View style={{
          flexDirection: 'row',
          paddingTop: 40
        }}>
          <Pressable >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 5 }}>
              <MaterialCommunityIcons name="logout" size={20} color="orange" />
              <Text style={{ fontSize: 20, color: 'orange' }}> Logout</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  )
}