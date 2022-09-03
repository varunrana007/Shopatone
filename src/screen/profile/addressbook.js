import React from "react";
import { Image, ScrollView, Flex, Pressable, View, Text, onPress, Box, Input, Button } from "native-base";

export default function Addressbook() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 15}}>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Full Name</Text>
        <Input mx="5" placeholder="Full Name" w="90%" />
      </View>
      <View>
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Mobile Number</Text>
        <Input mx="5" placeholder="Mobile Number" w="90%" />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18}}>Enter Address</Text>
        <Input mx="5" placeholder="Address(House No,Building,street,Area)" w="90%" mb={3} />
        <Input mx="5" placeholder="Address line 2 (Optionl)" w="90%" mb={3} />
        <Input mx="5" placeholder="Address line 3 (Optionl)" w="90%" mb={3}/>
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>LandMark</Text>
        <Input mx="5" placeholder="Landmark" w="90%" />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>City</Text>
        <Input mx="5" placeholder="City" w="90%" />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>State</Text>
        <Input mx="5" placeholder="State" w="90%" />
      </View>
      <View >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Enter Pin Code</Text>
        <Input mx="5" placeholder="Enter pin code" w="90%" />
      </View>
      <View style={{ marginBottom:20}} >
        <Text style={{ paddingTop: 10, fontWeight: 'bold', paddingLeft: 18 }}>Country</Text>
        <Input mx="5" placeholder="Country" w="90%" />
      </View>
      <Button mx='10' colorScheme="orange">
        Submit
      </Button>
      
    </ScrollView>

  )
}