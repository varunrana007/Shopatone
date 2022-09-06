import React from 'react'
import { Text, Box, Image, Heading, Input, VStack, Button, Center, View, HStack, Icon, Pressable, ScrollView } from "native-base";
import { Items } from './item';

export default function Homebanner() {
  return (
    <View pt={0.5}>
      <Image
        source={require('../images/strip.png')} />
    </View>
  )
}