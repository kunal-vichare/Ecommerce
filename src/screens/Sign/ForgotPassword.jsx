import { View, Text,TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Email from 'react-native-vector-icons/MaterialIcons';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.forgotPassText}>Forgot Password?</Text>
      <View style={styles.inputContainer}>
        <Email name="email" size={24} style={styles.email}/>
      <TextInput 
        placeholder='Enter your email address'
        style={styles.TextInput}
      />
      </View>
      <View style={styles.descContainer}>
      <Text style={styles.desc}> <Text style={{color:'red'}}>*</Text> We will send you a message to set or reset your new password</Text>
      </View>
      <TouchableOpacity 
        style={styles.submitBtn}
        onPress={()=>navigation.goBack()}
      >
        <Text style={styles.submitText}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flex:1
  },
  forgotPassText : {
    marginTop:60,
    marginBottom:30,
    width: 185,
    height: 83,
    // top: 63,
    left: 35,
    angle: 0,
    opacity: 1,
    // fontFamily:"Montserrat",
    fontWeight:'700',
    fontSize:36,
    lineHeight:43,
    letterSpacing:0
  },
  TextInput : {
    // position:'absolute',
    width:360,
    height:50,
    // top:182,
    left:0,
    right:0,
    borderWidth:1,
    borderColor:'#A8A8A9',
    // marginBottom:20,
    borderRadius:10,
    paddingLeft:40,
    
  },
  submitBtn : {
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    padding:10,
    marginLeft:25,
    marginRight:25,
  },
  submitText:{
    fontWeight:'700',
    fontSize:20,
    color: '#fff'
  },
  desc : {
    fontSize : 18,
    // fontFamily:'Timesnewroman',
    // marginLeft:20,
    // padding:25,
    // marginRight:20,
    fontWeight:'400',
    // marginBottom:30
  },
  inputContainer:{
    marginBottom:10,
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
  descContainer:{
    // marginLeft:20,
    // marginRight:20,
    // flex:1,
    padding:30,

    // backgroundColor:'red',
    // width:400,
    justifyContent:'center',
    alignItems:'center'
  },
  email : {
    position:'absolute',
    top:12,
    left:33,
  }
})
export default ForgotPassword