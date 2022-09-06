import React from 'react'
import { HStack, Text } from "native-base";
import Colors from '../color';
import { FontAwesome } from '@expo/vector-icons';

export default function Beautyrating({value,text}) {
    const size =10;
    const color=Colors.orange
    return (
        <HStack space={0.4} mt={1} alignItems="center">
            <FontAwesome name={
                value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"
            }
                size={size}
                color={color}
            />
            <FontAwesome name={
                value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"
            }
                size={size}
                color={color}
            />
            <FontAwesome name={
                value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"
            }
                size={size}
                color={color}
            />
            <FontAwesome name={
                value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"
            }
                size={size}
                color={color}
            />
            <FontAwesome name={
                value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"
            }
                size={size}
                color={color}
            />
            {text && (
                <Text fontSize={12} ml={2}>
                    {text}
                </Text>)
            }
        </HStack>
    )
}