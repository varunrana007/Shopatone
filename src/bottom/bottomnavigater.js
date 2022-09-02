import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicon  from "react-native-vector-icons/Ionicons"
import Home from '../screen/home';
import Profile from '../screen/profile';
import Setting from '../screen/setting';
const Tab = createBottomTabNavigator();
const Bottomnavigater = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" " component={Home} options={{
        headerShown: false,
        tabBarIcon: () => <BottomIcons name="home" />
      }} />
        <Tab.Screen name="  " component={Setting}
          options={{
            headerShown: false,
            tabBarIcon: () => <BottomIcons name="menu" />
          }} />
      <Tab.Screen name="   " component={Profile} options={{
        headerShown: false,
        tabBarIcon: () => <BottomIcons name="person" />
      }} />
    </Tab.Navigator>
  );
}
const BottomIcons = (props) => {
  return <Ionicon name={props.name} size={20} />
}
export default Bottomnavigater;
