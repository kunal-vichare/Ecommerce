import { View, Text, TouchableOpacity,Image, ImageBackground, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {height, width} from '../../constants'

const GetStarted = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <ImageBackground 
        source={require("../../assets/Splash Screen/GetStarted.png")}
        style={styles.image}
        resizeMode='contain'
      >
        <Text style={styles.headText}>
            You want Authentic, here you go!
        </Text>
        <Text style={styles.subText}>
            Find it here, buy it now!
        </Text>
        <TouchableOpacity 
            onPress={()=>navigation.replace("Drawer")}
            style={styles.btn}
        >
            <Text style={styles.btnText}>
                Get Started
            </Text>
        </TouchableOpacity>
    </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    image : {
        height: height.bgH,
        width:width.bgW
    },
    headText:{
        fontWeight:'600',
        fontSize:34,
        color:'#ffffff'
        // lineHeight:'100%',
        // letterSpacing:1,
    },
    subText : {
        fontWeight:'400',
        fontSize:14,
        color:'#f2f2f2'
    },
    btn:{

    },
    btnText : {

    }
})

export default GetStarted