import React from 'react'
import { Box, ScrollView } from "native-base";
import Colors from '../color';
import Homesearch from '../component/homesearch';
import Homebanner from '../component/homebanner';
import Homeproduct from '../component/homeproduct';
export default function Home() {
  return (
    <Box flex={1} bg={Colors.grey}>
      <Homesearch />
      <Homebanner />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Homeproduct />
      </ScrollView>
    </Box>
  )
}