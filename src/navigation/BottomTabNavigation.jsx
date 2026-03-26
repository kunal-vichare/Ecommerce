import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/BottomTabScreen/Home'
import Wishlist from '../screens/BottomTabScreen/Wishlist'
import Cart from '../screens/BottomTabScreen/Cart'
import Search from '../screens/BottomTabScreen/Search'
import Setting from '../screens/BottomTabScreen/Setting'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeStack from '../navigation/BottomTabStack/HomeStack'
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const getTabBarIcon = (routeName,focused,color,size) => {
      let iconName;
      if(routeName==='Home'){
        iconName = focused ? 'home' : 'home-outline'
      }
      else if(routeName==='Wishlist'){
        iconName = focused ? 'heart' : 'heart-outline'
      }
      else if(routeName==='Cart'){
        iconName = focused ? 'cart' : 'cart-outline'
      }
      else if(routeName==='Search'){
        iconName = focused ? 'search' : 'search-outline'
      }
      else if(routeName==='Setting'){
        iconName = focused ? 'settings' : 'settings-outline'
      }
      return <Icon name={iconName} size={size} color={color} />
    }
  return (
    <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon: ({focused,color,size}) => 
        getTabBarIcon(route.name,focused,color,size),
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle : {}
      })}
    >
        <Tab.Screen name="Home" 
        // component={Home}
        component={HomeStack}             
        options={{
          headerShown:false
        }}
        />
        <Tab.Screen name="Wishlist" component={Wishlist}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Setting" component={Setting}/>
    </Tab.Navigator>
  )
}
export default BottomTabNavigation