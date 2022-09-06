import React from 'react'
import { Text, Box, Image, Input, VStack, Center, View, HStack, Icon, Pressable, Button, ScrollView, Flex } from "native-base";
import Colors from '../color'
import { Yourorder } from '../product/youroder';
import { Keepshopping } from '../product/keepshopping';
import AppHeader from '../component/header';
export default function Setting({ navigation }) {
  const handleSubmit = (profiles) => {
    navigation.navigate(profiles)
  }
  return (
    <>
      <AppHeader/>
      <ScrollView >
        <View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#81007F70',
            marginTop: '1%'
          }}>

            <Text style={{ fontSize: 25, color: 'white', paddingTop: '5%', paddingLeft: '45%', paddingBottom: '2%' }}>Hello ,Abhishek</Text>
          </View>
        </View>
        <View my={1} bgColor={Colors.white} pt={2} pb={2}>
          <View flexDirection='row' style={{ justifyContent: 'space-evenly' }} mb={3}>
            <Button borderRadius="full" w={40} py={5} colorScheme="red" >
              Your Order
            </Button>
            <Button borderRadius="full" w={40} py={5} colorScheme="yellow" >
              Buy Again
            </Button>
          </View>
          <View flexDirection='row' style={{ justifyContent: 'space-evenly' }} >
            <Button borderRadius="full" w={40} py={5} colorScheme="green">
              Your Account
            </Button>
            <Button borderRadius="full" w={40} py={5} colorScheme="purple">
              Your Wish List
            </Button>
          </View>
        </View>
        <View pt={3} bgColor={Colors.white}>
          <View flexDirection='row' justifyContent='space-between'>
            <Text pl={2} style={{ fontSize: 20 }} >Your Order</Text>
            <Pressable>
              <Text style={{ fontSize: 20, color: 'blue' }} pr={2} >See All</Text>
            </Pressable>

          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Flex
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {Yourorder.map((item) => (
                <Pressable pl={2}>
                  <Flex pt={3} style={{ paddingLeft: "1%" }}>
                    <Image source={item.image} key={item._id} />
                    <Text >{item.name}</Text>
                  </Flex>
                </Pressable>
              ))}
            </Flex>
          </ScrollView>
        </View>
        <View pt={3} mt={1} bgColor={Colors.white}>
          <View flexDirection='row' justifyContent='space-between'>
            <Text pl={2} style={{ fontSize: 20 }} >Keep Shopping For</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Flex
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {Keepshopping.map((item) => (
                <Pressable pl={2}>
                  <Flex pt={3} style={{ paddingLeft: "1%" }}>
                    <Image source={item.image} key={item._id} />
                    <Text >{item.name}</Text>
                  </Flex>
                </Pressable>
              ))}
            </Flex>
          </ScrollView>
        </View>
        <View my={1} bgColor={Colors.white} pt={2} pb={2}>
          <View alignItems='center'>
            <Text pb={2} style={{fontSize:20}}>Your Wish List</Text>
            <Text pb={4} style={{fontSize:12}}>You haven't created any lists.</Text>
            <Button borderRadius="full" w='xs' py={2} colorScheme='warmGray' >
              <Text color='white' fontSize={25}>Create a List</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
      
    </>

  )
}

