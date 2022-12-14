import React from "react";
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottomnavigater from "./src/bottom/bottomnavigater";
import {Beautyscreen, Fashionscreen, Mobilescreen, Groceryscreen, Electronicsscreen} from './src/productscreen/beautyscreen';



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bottomnavigater" component={Bottomnavigater} options={{ headerShown: false }} />
          <Stack.Screen name="MobilePage" component={Mobilescreen} options={{ headerShown: false }}/>
          <Stack.Screen name="BeautyPage" component={Beautyscreen} options={{ headerShown: false }} />
          <Stack.Screen name="GroceryPage" component={Groceryscreen} options={{ headerShown: false }} />
          <Stack.Screen name="ElectronicsPage" component={Electronicsscreen} options={{ headerShown: false }} />
          <Stack.Screen name="FashionPage" component={Fashionscreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;