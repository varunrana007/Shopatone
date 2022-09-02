import React from 'react';
import { Text, Box, View, Flex, Pressable, Image, ScrollView, Heading, Value } from "native-base";
import Colors from '../color';
import Homesearch from '../component/homesearch';
import { Beautyproduct } from '../product/beauty';
import { Fashionproduct } from "../product/fashion";
import {Electronicsproduct} from '../product/electronics';
import {Groceryproduct} from '../product/grocery';
import {Mobileproduct} from '../product/mobile';
import Beautyrating from '../productscreen/beautyrating';
import Search from '../bottom/uppernavigater'

export function Beautyscreen() {
    return (
        <View flex={1}>
            <Search />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>

                <Flex
                    flexWrap='wrap'
                    direction="row"
                    justifyContent='space-between'
                    px={6}
                    style={{ backgroundColor: 'white' }}>

                    {Beautyproduct.map((item) => (
                        <Pressable
                            key={item._id}
                            w="47%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={5}
                            overflow="hidden"
                        >
                            <Image
                                source={{ uri: item.image }}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ₹{item.price}
                                </Heading>
                                <Text isTruncated>
                                    {item.name}
                                </Text>
                                <Text fontSize={12} color="grey" isTruncated>
                                    {item.name1}
                                </Text>
                                <Beautyrating value={item.rating} />
                            </Box>
                        </Pressable>
                    ))}
                </Flex>
            </ScrollView>
        </View>
    )
};
export function Fashionscreen() {
    return (
        <View flex={1}>
            <Search />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>

                <Flex
                    flexWrap='wrap'
                    direction="row"
                    justifyContent='space-between'
                    px={6}
                    style={{ backgroundColor: 'white' }}>

                    {Fashionproduct.map((item) => (
                        <Pressable
                            key={item._id}
                            w="47%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={5}
                            overflow="hidden"
                        >
                            <Image
                                source={{ uri: item.image }}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ₹{item.price}
                                </Heading>
                                <Text isTruncated>
                                    {item.name}
                                </Text>
                                <Text fontSize={12} color="grey" isTruncated>
                                    {item.name1}
                                </Text>
                                <Beautyrating value={item.rating} />
                            </Box>
                        </Pressable>
                    ))}
                </Flex>
            </ScrollView>
        </View>
    )
};
export function Mobilescreen() {
    return (
        <View flex={1}>
            <Search />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>

                <Flex
                    flexWrap='wrap'
                    direction="row"
                    justifyContent='space-between'
                    px={6}
                    style={{ backgroundColor: 'white' }}>

                    {Mobileproduct.map((item) => (
                        <Pressable
                            key={item._id}
                            w="47%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={5}
                            overflow="hidden"
                        >
                            <Image
                                source={{ uri: item.image }}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ₹{item.price}
                                </Heading>
                                <Text isTruncated>
                                    {item.name}
                                </Text>
                                <Text fontSize={12} color="grey" isTruncated>
                                    {item.name1}
                                </Text>
                                <Beautyrating value={item.rating} />
                            </Box>
                        </Pressable>
                    ))}
                </Flex>
            </ScrollView>
        </View>
    )
};
export function Groceryscreen() {
    return (
        <View flex={1}>
            <Search />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>

                <Flex
                    flexWrap='wrap'
                    direction="row"
                    justifyContent='space-between'
                    px={6}
                    style={{ backgroundColor: 'white' }}>

                    {Groceryproduct.map((item) => (
                        <Pressable
                            key={item._id}
                            w="47%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={5}
                            overflow="hidden"
                        >
                            <Image
                                source={{ uri: item.image }}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ₹{item.price}
                                </Heading>
                                <Text isTruncated>
                                    {item.name}
                                </Text>
                                <Text fontSize={12} color="grey" isTruncated>
                                    {item.name1}
                                </Text>
                                <Beautyrating value={item.rating} />
                            </Box>
                        </Pressable>
                    ))}
                </Flex>
            </ScrollView>
        </View>
    )
};
export function Electronicsscreen() {
    return (
        <View flex={1}>
            <Search />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>

                <Flex
                    flexWrap='wrap'
                    direction="row"
                    justifyContent='space-between'
                    px={6}
                    style={{ backgroundColor: 'white' }}>

                    {Electronicsproduct.map((item) => (
                        <Pressable
                            key={item._id}
                            w="47%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={5}
                            overflow="hidden"
                        >
                            <Image
                                source={{ uri: item.image }}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading size="sm" bold>
                                    ₹{item.price}
                                </Heading>
                                <Text isTruncated>
                                    {item.name}
                                </Text>
                                <Text fontSize={12} color="grey" isTruncated>
                                    {item.name1}
                                </Text>
                                <Beautyrating value={item.rating} />
                            </Box>
                        </Pressable>
                    ))}
                </Flex>
            </ScrollView>
        </View>
    )
};
