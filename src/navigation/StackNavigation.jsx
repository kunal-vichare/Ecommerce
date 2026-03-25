import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/Sign/SignIn';
import SignUp from '../screens/Sign/SignUp';
import ForgotPassword from '../screens/Sign/ForgotPassword';
import DrawerTabNavigation from './DrawerTabNavigation';
import ProductDetails from '../screens/ProductDetails/ProductDetails'
import Profile from '../components/HomeComponents/SubComponent/Profile'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name = 'Sign In'
            component = {SignIn}
            options={()=>({
                headerShown:false
            })}
        />
        <Stack.Screen 
            name = 'Sign Up'
            component = {SignUp}
            options={()=>({
                headerShown:false
            })}
        />
        <Stack.Screen 
            name = 'Forgot Password'
            component = {ForgotPassword}
            options={()=>({
                headerShown:false
            })}
        />
        <Stack.Screen 
            name = 'Product Details Screen'
            component = {ProductDetails}
            options={()=>({
                headerShown:true
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