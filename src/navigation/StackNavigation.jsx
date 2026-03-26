import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerTabNavigation from './DrawerTabNavigation';
import Profile from '../components/HomeComponents/SubComponent/Profile'
import AuthStack from '../navigation/AuthStack/AuthStack'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Auth'
            component={AuthStack}
            options={()=>({
                headerShown:false
            })}
        />
        <Stack.Screen 
            name = 'Profile'
            component = {Profile}
            options={()=>({
                headerShown:true
            })}
        />
        <Stack.Screen 
            name = 'Drawer'
            component = {DrawerTabNavigation}
            options={{
                headerShown:false
            }}
        />
    </Stack.Navigator>
  )
}

export default StackNavigation