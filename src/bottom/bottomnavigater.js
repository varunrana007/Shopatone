import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicon  from "react-native-vector-icons/Ionicons"
import Home from '../screen/home';
import Profile from '../screen/profile';
import Setting from '../screen/setting';
const Tab = createBottomTabNavigator();
const Bottomnavigater = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'lightgray',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: '#6409E4E3',
          style: {
                backgroundColor: 'purple',
                paddingBottom: 3
          }
   }}>
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
