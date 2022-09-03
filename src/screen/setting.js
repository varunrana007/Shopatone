import React from 'react'
import { Text, Box, Image, Input, VStack, Center, View, HStack, Icon, Pressable, Button, ScrollView, Flex } from "native-base";
import { MaterialIcons, Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import Colors from '../color'
import { Yourorder } from '../product/youroder';
import { Keepshopping } from '../product/keepshopping';
export default function Setting({ navigation }) {
  const handleSubmit = (profiles) => {
    navigation.navigate(profiles)
  }
  return (
    <View bgColor={Colors.grey}>
      <HStack
      w='full'
      bg={Colors.orange}
      py={6}
      px={3}
      pt={8}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >

      <VStack w='full' style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Center flexDirection='row'>
          <Image size={50} borderRadius={100} source={{
            uri: "https://shopatone.com/logo.png"
          }} alt="Alternate Text" />
          <Text style={{ fontSize: 35, color: 'white', paddingTop: 20 }}>ShopAtOne</Text>
        </Center>

        <Pressable>
          <Entypo name="shopping-cart" size={24} color="white" />
          <Box
            px={1}
            rounded="full"
            position="absolute"
            top={-13}
            bg={Colors.white}
            _text={{
              color: Colors.white,
              fontSize: "11px"
            }}
          >
          </Box>
        </Pressable>
      </VStack>
      <VStack  >
        <Input
          placeholder="Search Products"
          width="100%"
          borderRadius="2"
          py="2"
          _focus={{
            backgroundColor: 'white',
          }}
          bg={Colors.white}
          fontSize="12"
          InputLeftElement={<Icon m="2" ml="3" size="5" color="black" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="5" color="black" as={<MaterialIcons name="mic" />} />} />
      </VStack>

    </HStack >
      <ScrollView>
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
                <Pressable >
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
                <Pressable >
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
          <View flexDirection='row' style={{ justifyContent: 'space-evenly' }} mb={3}>
            <Button borderRadius="full" w={40} py={5} colorScheme="red" >
              Your Order
            </Button>
            <Button borderRadius="full" w={40} py={5} colorScheme="yellow" >
              Buy Again
            </Button>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

