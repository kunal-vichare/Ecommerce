import { View, Text, TouchableOpacity,TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Person from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/Fontisto';
import Eye from 'react-native-vector-icons/Entypo';
import CloseEye from 'react-native-vector-icons/Entypo';

const SignIn = () => {
  const googleImg = require('../../assets/login/Google.png');
  const appleImg = require('../../assets/login/Apple.png');
  const facebookImg = require('../../assets/login/Facebook.png');
  const [hide,setHide] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Person name="person" size={24} style={styles.personIcon}/>
        <TextInput 
          placeholder='Username or Email'
          style={styles.TextInput}
        />
        <Lock name="locked" size={24} style={styles.lockIcon}/>

        <TouchableOpacity style={styles.eye} onPress={()=>setHide(!hide)}>
          {hide? <Eye name="eye" size={24} /> : <CloseEye name="eye-with-line" size={24} />}
        </TouchableOpacity>
        <TextInput 
          placeholder='Password '
          style={styles.TextInput}
        />

      </View>
      <TouchableOpacity 
        style={styles.frgBtn}
        onPress={()=>navigation.navigate('Forgot Password')}
      >
        <Text style={styles.frgText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={()=>navigation.navigate("GetStarted")}
      >
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
      <View style={styles.btmContainer}>
      <Text style={styles.continueText}>
        -Or continue with-
      </Text>
      <View style={styles.logoBtnContainer}>
        <TouchableOpacity
         style={styles.logoBtn}
        >
        <Image
          source = {googleImg}
          style = {styles.profileImage}
          // resizeMode='resize'
        />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.logoBtn}
        >
        <Image
          source = {appleImg}
          style = {styles.
            appleImg}
          // resizeMode='resize'
        />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.logoBtn}
        >
          <Image
          source = {facebookImg}
          style = {styles.profileImage}
          // resizeMode='resize'
        />
        </TouchableOpacity>
        </View>
        <View style={styles.createAccContainer}>
          <Text style={styles.createAccText}>
            Create An Account 
          </Text>
            <TouchableOpacity 
              style={styles.signUpBtn}
              onPress={()=>navigation.navigate("Sign Up")}
            >
              <Text  style={styles.signUpText}>
                Sign Up
              </Text>
            </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {

  },
  welcomeTextContainer : {
    marginTop:100,
    marginBottom:30,
    width: 185,
    height: 83,
    // top: 63,
    left: 35,
    angle: 0,
    opacity: 1,
  },
  welcomeText : {
    fontFamily:"Montserrat",
    fontWeight:'700',
    fontSize:36,
    lineHeight:43,
    letterSpacing:0
  },
  inputContainer : {
  
    marginBottom:10,
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
  TextInput :  {
    // position:'absolute',
    width:330,
    height:50,
    // top:182,
    left:0,
    right:0,
    borderWidth:1,
    borderColor:'#A8A8A9',
    marginBottom:20,
    borderRadius:10,
    paddingLeft:40
  },
  frgBtn : {
    // flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    top:-20,
    right:40,
    marginBottom:10
  },
  frgText : {
    fontWeight:'500',
    color:'#fb0598'
  },
  loginBtn : {
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    padding:10,
    marginLeft:35,
    marginRight:35,
    marginBottom:80
  },
  loginText : {
    fontWeight:'700',
    fontSize:20,
    color: '#fff'
  },
  btmContainer : {
    alignItems:'center'
  },
  continueText : {
    fontSize:18,
    fontWeight:'800',
    marginBottom:40
  },
  logoBtnContainer : {
    width:220,
    // backgroundColor:'yellow',
    flexDirection:'row',
    // flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    
  },
  logoBtn : {
    // backgroundColor : '#ffc7c7',
    height:56,
    width:56,
    borderRadius:28,
    // borderWidth:1,
    // borderColor:'red'
  },
  createAccContainer : {
    flexDirection:'row',
    marginTop:40,
    padding:5
  },
  createAccText : {
    fontSize:18,
    fontWeight:'800'
  },
  signUpBtn : {
    marginLeft:10,
  },
  signUpText : {
    color:'red',
    fontWeight:'800',
    fontSize:18,
    textDecorationLine: 'underline'
  },
  personIcon : {
    position:'absolute',
    top : 10,
    left : 49,
  },
  lockIcon : {
    // top : 6
    top:35,
    left:-145
  },
  eye : {
    position : 'absolute',
    right:55,
    zIndex:1,
    bottom:30,
    // backgroundColor:'red'
    // padding:5
  }
})

export default SignIn