import React from "react";
import { Image, ScrollView, Flex, Pressable, View, Text, onPress } from "native-base";
import Colors from '../color';
import { Items } from "./item";
import { Latestproduct } from '../component/latestproduct'
import { Sponsoredbanner } from '../component/Sponsoredbanner'
import { useNavigation } from "@react-navigation/native";

export default function Homeproduct() {
    const navigation = useNavigation();
    handleNavigation = (name) => {
        if (name === 'Beauty') {
            navigation.navigate('BeautyPage')
        } else if (name === 'Electronices') {
            navigation.navigate('ElectronicsPage')
        } else if (name === 'Fashion') {
            navigation.navigate('FashionPage')
        } else if (name === 'Mobile') {
            navigation.navigate('MobilePage')
        } else if (name === 'Grocery') {
            navigation.navigate('GroceryPage')
        }
    }
    return (
        <View>
            <Flex
                flexWrap='wrap'
                direction="row"
                justifyContent='space-between'
                px={3}
                style={{ marginTop: 5, backgroundColor: 'white' }}
            >
                {Items.map((item) => (
                    <Pressable onPress={() => handleNavigation(item.name)} key={item._id}>
                  

                        <Flex style={{ alignItems: 'center' }}>
                            <Image source={item.image} />
                            <Text >{item.name}</Text>
                        </Flex>
                    </Pressable>
                ))}
            </Flex>
            <View style={{ marginTop: 5 }}>
                <Image
                    source={require('../images/salebanner.png')} />
            </View>

            <Flex
                flexWrap='wrap'
                direction="row"
                justifyContent='space-between'
                px={1}
                style={{ marginTop: 5, backgroundColor: 'white' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 20, paddingBottom: 20, paddingLeft: 17 }}>Latest and upcoming products</Text>
                <Flex
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {Latestproduct.map((item) => (
                        <Pressable >
                            <Flex style={{ paddingLeft: 15 }} key={item._id}>
                                <Image source={item.image}  />
                                <Text >{item.name}</Text>
                            </Flex>
                        </Pressable>
                    ))}
                </Flex>
            </Flex>

            <Flex
                flexWrap='wrap'
                flexDirection='row'
                style={{ marginTop: 5, backgroundColor: 'white' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, paddingTop: 20, paddingBottom: 20, paddingLeft: 17, paddingRight: 20 }}>
                    Sponsored</Text>
            </Flex>
            <Flex
                flexWrap='wrap'
                flexDirection='row'
                style={{ backgroundColor: 'white' }}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {Sponsoredbanner.map((item) => (
                            <Flex style={{ paddingLeft: 15 }} key={item._id}>
                                <Image source={item.image}  />
                                <Text >{item.name}</Text>
                            </Flex>
                        ))}
                    </View>
                </ScrollView>
            </Flex>
        </View>

    )
}