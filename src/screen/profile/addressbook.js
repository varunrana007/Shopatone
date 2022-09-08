import React, { useState } from "react";
import { Image, ScrollView, Flex, Pressable, View, Text, onPress, Box, Input, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Addressbook() {
  const navigation = useNavigation();
  const onHandleChange = () => {
    navigation.navigate('')
  }

  const [Address, setAddress] = useState({
    fullname: '',
    mobilenumber: '',
    Address: '',
    Address1: '',
    Address2: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
  });
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 15 }}>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Full Name</Text>
        <Input mx="5" placeholder="Full Name" w="90%" name='fullname' value={Address.fullname} onChange={onHandleChange}  />
      </View>
      <View>
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Mobile Number</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="Mobile Number" w="90%" name='mobilenumber' value={Address.mobilenumber} />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Enter Address</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="Address(House No,Building,street,Area)" w="90%" mb={3} name='Address' value={Address.Address} />
        <Input onChange={onHandleChange} mx="5" placeholder="Address line 2 (Optionl)" w="90%" mb={3} name='Address1' value={Address.Address1} />
        <Input onChange={onHandleChange} mx="5" placeholder="Address line 3 (Optionl)" w="90%" mb={3} name='Address2'value={Address.Address2} />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>LandMark</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="Landmark" w="90%" name='landmark' value={Address.landmark} />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>City</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="City" w="90%" name='city' value={Address.city}/>
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>State</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="State" w="90%" name='city' value={Address.city}/>
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Enter Pin Code</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="Enter pin code" w="90%" name='pincode' value={Address.pincode} />
      </View>
      <View style={{ marginBottom: 20 }} >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Country</Text>
        <Input onChange={onHandleChange} mx="5" placeholder="Country" w="90%" name='country' value={Address.country} />
      </View>
      <Button mx='10' colorScheme="orange">
        Submit
      </Button>

    </ScrollView>

  )
}