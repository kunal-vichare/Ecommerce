import { View, Text,Image,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity>
          <Image source={require('../../../assets/BottomTab/Profile.png')} style={{height:100,width:100,resizeMode:'stretch'}}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Personal Details</Text>
        <Text>Email Address</Text>
        <TextInput placeholder='Enter your email'/>
        <Text>Password</Text>
        <TextInput placeholder='Enter your password'/>
      </View>
      <View>
        <Text>Business Address Details</Text>
        <Text>Pincode</Text>
        <TextInput placeholder='Enter your pincode'/>
        <Text>Address</Text>
        <TextInput placeholder='Enter your address'/>
        <Text>City</Text>
        <TextInput placeholder='Enter your city'/>
        <Text>State</Text>
        <TextInput placeholder='Enter your state'/>
        <Text>Country</Text>
        <TextInput placeholder='Enter your country'/>
      </View>
      <View>
        <Text>Bank Account Details</Text>
        <Text>Bank Account Number</Text>
        <TextInput placeholder='Enter bank account number'/>
        <Text>Account Holder's Name</Text>
        <TextInput placeholder='Enter account holder name'/>
        <Text>IFSC Code</Text>
        <TextInput placeholder='Enter IFSC Code'/>
      </View>
    </View>
  )
}

export default Profile