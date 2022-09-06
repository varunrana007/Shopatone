import React from 'react'
import { Input, View, Pressable } from "native-base";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

export default function SearchPage() {
    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <View alignItems='center' >
                <View w='90%' flexDirection='row' alignItems='center'>
                    <Pressable onPress={() => handleBackButton()}>
                        <Entypo name="magnifying-glass" size={24} color="black" />
                    </Pressable>
                    <Input w='88%' variant="unstyled" placeholder="Search For Products..." />
                    <Pressable>
                        <FontAwesome name="microphone" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
