import React from 'react'
import { Box, ScrollView } from "native-base";
import Colors from '../color';
import Homebanner from '../component/homebanner';
import Homeproduct from '../component/homeproduct';
import AppHeader from '../component/header';
export default function Home() {
  return (
    <Box flex={1} bg={Colors.grey}>
      <AppHeader/>
      <Homebanner/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Homeproduct/>
      </ScrollView>
    </Box>
  )
}