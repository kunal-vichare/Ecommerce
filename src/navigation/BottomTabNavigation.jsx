import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/BottomTabScreen/Home'
import Wishlist from '../screens/BottomTabScreen/Wishlist'
import Cart from '../screens/BottomTabScreen/Cart'
import Search from '../screens/BottomTabScreen/Search'
import Setting from '../screens/BottomTabScreen/Setting'


const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Wishlist" component={Wishlist}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Setting" component={Setting}/>
    </Tab.Navigator>
  )
}
export default BottomTabNavigation