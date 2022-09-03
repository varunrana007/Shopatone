import React from 'react'
import { Text, Box, Image, Input, VStack, Center, View, HStack, Icon, Pressable } from "native-base";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Colors from '../color'
import { Ionicons } from '@expo/vector-icons';
export default function Search() {
  return (
    <HStack
      w='full'
      px={4}
      bg={Colors.orange}
      py={7}
      alignItems='center'
    >
      <View >
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 1
        }}>
          <Pressable style={{ paddingRight: '5%' }}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </Pressable >
          <Center>
            <Image size={50} borderRadius={100} source={{
              uri: "https://shopatone.com/logo.png"
            }} alt="Alternate Text" />
          </Center>
          <Text style={{ fontSize: 35, color: 'white', paddingTop: 20 }}>ShopAtOne</Text>
          <Pressable >
            <Entypo name="shopping-cart" size={24} color="white" style={{ paddingLeft: '10%' }} />
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
        </View>
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
      </View >
    </HStack >
  );
}