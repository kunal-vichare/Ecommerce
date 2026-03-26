import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../screens/Sign/SignIn'
import SignUp from '../../screens/Sign/SignUp'
import ForgotPassword from '../../screens/Sign/ForgotPassword'
import GetStarted from '../../screens/SplashScreen/GetStarted'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
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
            name = 'GetStarted'
            component = {GetStarted}
            options={()=>({
                headerShown:false
            })}
        />        
    </Stack.Navigator>
  )
}

export default AuthStack