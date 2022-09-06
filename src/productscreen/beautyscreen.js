import React from 'react';
import { Text, Box, View, Flex, Pressable, Image, ScrollView, Heading, Value, Button } from "native-base";
import Colors from '../color';
import { Beautyproduct } from '../product/beauty';
import { Fashionproduct } from "../product/fashion";
import { Electronicsproduct } from '../product/electronics';
import { Groceryproduct } from '../product/grocery';
import { Mobileproduct } from '../product/mobile';
import Beautyrating from '../productscreen/beautyrating';
import CategoriesHeader from '../component/CategoriesHeader';
import { useNavigation } from "@react-navigation/native";

export function Beautyscreen() {
    const navigation = useNavigation();
    const handleBeautyItem = (item) => {
        navigation.navigate("Productpage", item);
    }
    return (
        <View flex={1}>
            <CategoriesHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flexDirection='row' bg='white' justifyContent='space-between' pt={2}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>
                    <View flexDirection='row' w='40%' justifyContent='space-between' pr={2}>
                        <Button w='16' colorScheme="orange"><Text fontSize={10}>Top Brands</Text></Button>
                        <Button w='16' colorScheme="success"><Text fontSize={10}>Filter</Text></Button>
                    </View>
                </View>
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
                            onPress={() => handleBeautyItem(item)}
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
    const navigation = useNavigation();
    const handleFashionItem = (item) => {
        navigation.navigate("Productpage", item);
    }
    return (
        <View flex={1}>
            <CategoriesHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flexDirection='row' bg='white' justifyContent='space-between' pt={2}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>
                    <View flexDirection='row' w='40%' justifyContent='space-between' pr={2}>
                        <Button w='16' colorScheme="orange"><Text fontSize={10}>Top Brands</Text></Button>
                        <Button w='16' colorScheme="success"><Text fontSize={10}>Filter</Text></Button>
                    </View>
                </View>
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
                            onPress={() => handleFashionItem(item)}
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
                        </Pressable >
                    ))}
                </Flex>
            </ScrollView>
        </View>
    )
};
export function Mobilescreen() {
    const navigation = useNavigation();
    const handleMobileItem = (item) => {
        navigation.navigate("Productpage", item);
    }
    return (
        <View flex={1}>
            <CategoriesHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flexDirection='row' bg='white' justifyContent='space-between' pt={2}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>
                    <View flexDirection='row' w='40%' justifyContent='space-between' pr={2}>
                        <Button w='16' colorScheme="orange"><Text fontSize={10}>Top Brands</Text></Button>
                        <Button w='16' colorScheme="success"><Text fontSize={10}>Filter</Text></Button>
                    </View>
                </View>

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
                            onPress={() => handleMobileItem(item)}
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
    const navigation = useNavigation();
    const handleGroceryItem = (item) => {
        navigation.navigate("Productpage", item);
    }
    return (
        <View flex={1}>
            <CategoriesHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flexDirection='row' bg='white' justifyContent='space-between' pt={2}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>
                    <View flexDirection='row' w='40%' justifyContent='space-between' pr={2}>
                        <Button w='16' colorScheme="orange"><Text fontSize={10}>Top Brands</Text></Button>
                        <Button w='16' colorScheme="success"><Text fontSize={10}>Filter</Text></Button>
                    </View>
                </View>

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
                            onPress={() => handleGroceryItem(item)}
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
    const navigation = useNavigation();
    const handleElectronicsItem = (item) => {
        navigation.navigate("Productpage", item);
    }
    return (
        <View flex={1}>
            <CategoriesHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flexDirection='row' bg='white' justifyContent='space-between' pt={2}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 10, paddingLeft: 17, }}>Result</Text>
                    <View flexDirection='row' w='40%' justifyContent='space-between' pr={2}>
                        <Button w='16' colorScheme="orange"><Text fontSize={10}>Top Brands</Text></Button>
                        <Button w='16' colorScheme="success"><Text fontSize={10}>Filter</Text></Button>
                    </View>
                </View>

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
                            onPress={() => handleElectronicsItem(item)}
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
