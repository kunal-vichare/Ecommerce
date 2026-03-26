import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name = ''
            // component = {}
            options={()=>({
                headerShown:false
            })}
        />        
    </Stack.Navigator>
  )
}

export default CartStack