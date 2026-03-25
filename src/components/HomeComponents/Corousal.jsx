import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Arrow from 'react-native-vector-icons/FontAwesome6'

const Corousal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/BottomTab/Corousal1.jpg')} style={styles.img}/>
      </View>
    <View style={styles.text}>
      <Text style={styles.top}>50-40% OFF</Text>
      <Text style={styles.middle}>Now in Product</Text>
      <Text style={styles.middle}>All Colours</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          Shop Now
        </Text>
        <Arrow name="arrow-right-long" size={24} style={{color : '#fff'}}/>
      </TouchableOpacity>
    </View>
    </View>
  )
}
const styles = StyleSheet.create ({
  img : {
    width:380,
    height:170,
    resizeMode:'stretch',
    borderRadius:20
  },
  container : {
    // height:180,
    // width:400,
    // marginLeft:5,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red',
  },
  text : {
    position:'absolute',
    left:55,
    // marginBottom:-80,
    zIndex:1,
    top:25
  },
  top : {
    color:'#fff',
    fontWeight:'900',
    fontSize:22
  },
  middle : {
    color : '#fff',
    fontWeight:500
  },
  btnText : {
    fontSize:18,
    color:'#fff',
    fontWeight:'700',
    marginLeft:5,
    marginRight:5
  },
  btn : {
    borderWidth : 1,
    flexDirection:'row',
    borderColor:'#fff',
    alignItems: 'center',
    width:130,
    padding:3,
    borderRadius:20,
    left:-10,
    top:10
  }
})
export default Corousal