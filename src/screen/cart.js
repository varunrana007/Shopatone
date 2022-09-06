import React from 'react';
import { Text, Box, View, Flex, Pressable, Image, ScrollView, Heading, Value, Button } from "native-base";
import AppHeader from '../component/header';
import CategoriesHeader from '../component/CategoriesHeader';
export default function Cartpage() {
  return (
    <View>
      <CategoriesHeader />
      <Box bg="primary.400" p="12" rounded="lg">
        Cart
      </Box>
    </View>
  )
}