import React from "react";
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottomnavigater from "./src/bottom/bottomnavigater";
import {Beautyscreen, Fashionscreen, Mobilescreen, Groceryscreen, Electronicsscreen} from './src/productscreen/beautyscreen';
import Changepassword from './src/screen/profile/changepassword';
import Addressbook from './src/screen/profile/addressbook';
import SearchPage from './src/Page/Searchpage';
import Productpage from "./src/Page/productpage";
import Cartpage from "./src/screen/cart";
import Address from "./src/screen/profile/address";
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
          <Stack.Screen name="Changepasswordpage" component={Changepassword} options={{title: 'ShopAtOne Dev',}}/>
          <Stack.Screen name="Addressbookpage" component={Addressbook} options={{title:'ShopAtOne Dev'}}/>
          <Stack.Screen name="Searchpage" component={SearchPage} options={{ headerShown: false }}/>
          <Stack.Screen name="Productpage" component={Productpage} options={{ headerShown: false }}/>
          <Stack.Screen name="Cartpage" component={Cartpage} options={{ headerShown: false }}/>
          <Stack.Screen name="Address" component={Address} options={{ title:'ShopAtOne Dev'}}/>

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;