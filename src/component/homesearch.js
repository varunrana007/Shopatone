import React from 'react'
import { Text, Box, Image, Input, VStack, Center, View, HStack, Icon, Pressable } from "native-base";
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import Colors from '../color'

export default function Homesearch() {
  return (
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
  );
}