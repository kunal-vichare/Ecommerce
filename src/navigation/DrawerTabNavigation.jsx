import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/BottomTabScreen/Home'
import BottomTabNavigation from './BottomTabNavigation';
const Drawer = createDrawerNavigator();

const DrawerTabNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown:false
        // drawerStyle:{
        //   backgroundColor:'#e6e6e6',
        //   width:240,
        // },
        // drawerLabelStyle:{
        //   fontSize:18,
        //   color:'#333'
        // },
        // headerStyle : {
        //   backgroundColor:'#6200EE '
        // },
        // headerTintColor:'#fff',
        // headerTitleAlign:'center'
      }}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabNavigation} />
      <Drawer.Screen name="Home" component={Home}/>
      {/* <Drawer.Screen name="Logout" /> */}
    </Drawer.Navigator>
  )
}

export default DrawerTabNavigation