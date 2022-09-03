import React from "react";
import { Image, ScrollView, Flex, Pressable, View, Text, onPress, Button, Input, Box } from "native-base";
export default function Changepassword() {
  return (
    <View >
      <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 5 }}>
        <Text style={{ paddingTop: 15, fontWeight: 'bold' }}>Old Password   </Text>
        <Input mx="5" placeholder="Old Password" w="66%" />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ paddingTop: 15, fontWeight: 'bold' }}>New Password </Text>
        <Input mx="5" placeholder="New Password" w="66%" />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ paddingTop: 15, fontWeight: 'bold' }}>Confirm Password</Text>
        <Input mx="1" placeholder="Confirm Password" w="66%" />
      </View>
      <View >
        <Button mx='6' colorScheme="orange">
          Update Password
        </Button>
      </View>
    </View>
  )
}
